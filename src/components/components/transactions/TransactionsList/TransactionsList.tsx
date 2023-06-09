import React from 'react';
import { MetadataModel, TransactionsModel } from 'models';
import { Badge, MessageType } from 'components';
import { Button, Card, Table } from 'frontend-elements';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { MessagesType, NavigationConstants } from 'constant';
import { i18n, NumbersUtils, StringsUtils } from 'utils';
import moment from 'moment-timezone';
import moreLogo from 'assets/images/more.svg';
import { LumConstants } from '@lum-network/sdk-javascript';
import numeral from 'numeral';

interface IProps extends RouteComponentProps {
    transactions: TransactionsModel[];
    metadata?: MetadataModel;
    onChangePage?: (page: number) => void;
    rej?: boolean;
    title?: boolean;
    more?: boolean;
    accountAddress?: string;
    total?: boolean;
    className?: string;
}

const TransactionsList = (props: IProps): JSX.Element => {
    const renderAmount = (transaction: TransactionsModel): JSX.Element => {
        if (transaction.messagesCount > 1) {
            return (
                <Link to={`${NavigationConstants.TRANSACTIONS}/${transaction.hash}`}>
                    <span className="color-type me-1">{i18n.t('more')}</span>
                    <img src={moreLogo} alt="more" />
                </Link>
            );
        }

        return (
            <div className="d-flex justify-content-end">
                {transaction.amount && transaction.amount.amount ? (
                    <>
                        {NumbersUtils.formatNumber(transaction.amount, true)}
                        <span className="ms-2 color-type">{LumConstants.LumDenom}</span>
                    </>
                ) : (
                    '-'
                )}
            </div>
        );
    };

    const renderRow = (transaction: TransactionsModel, index: number, head: string[]): JSX.Element => {
        const { rej } = props;

        return (
            <tr key={index}>
                <td data-label={head[0]} title={transaction.hash}>
                    <Link title={transaction.hash} to={`${NavigationConstants.TRANSACTIONS}/${transaction.hash}`}>
                        {StringsUtils.trunc(transaction.hash || '', rej ? 4 : 6)}
                    </Link>
                </td>
                <td data-label={head[1]}>
                    <MessageType
                        receive={transaction.messageType === MessagesType.SEND && props.accountAddress !== undefined && props.accountAddress !== transaction.addresses[0]}
                        badge
                        type={transaction.messageType}
                    />
                    {transaction.messagesCount > 1 && <span className="ms-2 color-type round-tags">+{transaction.messagesCount - 1}</span>}
                </td>
                {!rej && (
                    <>
                        <td data-label={head[2]}>
                            <Badge success={transaction.success} />
                        </td>
                        <td data-label={head[3]} className="text-end">
                            {renderAmount(transaction)}
                        </td>
                    </>
                )}
                <td data-label={head[4]} className="text-end">
                    <Link to={`${NavigationConstants.BLOCKS}/${transaction.height}`}>{transaction.height}</Link>
                </td>
                <td data-label={head[5]} className="text-end">
                    <small>{moment.utc(transaction.time).fromNow()}</small>
                </td>
            </tr>
        );
    };

    const { transactions, rej, title, more, history, metadata, onChangePage, total, className } = props;
    const full = [i18n.t('hash'), i18n.t('type'), i18n.t('status'), i18n.t('amount'), i18n.t('block'), i18n.t('time')];
    const simplified = [i18n.t('hash'), i18n.t('type'), i18n.t('block'), i18n.t('time')];

    return (
        <Card withoutPadding className={`pb-3 ${className}`}>
            <div className="d-flex justify-content-between">
                {title && (
                    <h3 className="mx-xl-5 mt-xl-5 mb-xl-2 mx-3 mt-3">
                        {i18n.t('transactions')} {total && metadata && <span> ({numeral(metadata.itemsTotal).format('0,0')})</span>}
                    </h3>
                )}
                {more && (
                    <Button className="mx-xl-5 mt-xl-5 mb-xl-2 mx-3 mt-3" onPress={() => history.push(NavigationConstants.TRANSACTIONS)}>
                        {i18n.t('viewAll')}
                    </Button>
                )}
            </div>
            <Table pagination={metadata} onPageChange={onChangePage} head={rej ? simplified : full}>
                {transactions.map((transaction, index) => renderRow(transaction, index, full))}
            </Table>
        </Card>
    );
};

export default withRouter(TransactionsList);
