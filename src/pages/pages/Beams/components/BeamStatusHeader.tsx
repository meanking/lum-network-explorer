import React from 'react';
import moment from 'moment';
import { Button } from 'frontend-elements';
import { i18n } from 'utils';

interface Props {
    date: string;
    status: string;
    onViewJson?: () => void;
}

const BeamStatusHeader = ({ date, status, onViewJson }: Props): JSX.Element => (
    <div className="status-header">
        <div>
            <h4>
                <span>
                    <div className="dot me-4" />
                </span>
                {status}
                <span>
                    <div className="date-badge ms-4">{moment(date).format('D MMMM YYYY - LTS')}</div>
                </span>
            </h4>
        </div>
        {onViewJson && <Button onPress={onViewJson}>{i18n.t('viewJson')}</Button>}
    </div>
);

export default BeamStatusHeader;
