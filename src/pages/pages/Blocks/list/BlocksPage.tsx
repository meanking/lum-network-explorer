import React, { useEffect, useState } from 'react';
import { Dispatch, RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { BlocksList } from 'components';
import blockLogo from 'assets/images/blockDark.svg';
import { i18n } from 'utils';

const BlocksPage = (): JSX.Element | null => {
    const dispatch = useDispatch<Dispatch>();
    const blocks = useSelector((state: RootState) => state.blocks.blocks);
    const metadata = useSelector((state: RootState) => state.blocks.metadata);

    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch.blocks.fetchBlocks(page).finally(() => null);
    }, [page]);

    if (!blocks) {
        return null;
    }

    return (
        <>
            <h2 className="mt-3 mb-4">
                <img alt="block" src={blockLogo} /> {i18n.t('blocks')}
            </h2>
            <BlocksList className="mb-5" blocks={blocks} metadata={metadata} onPageChange={setPage} />
        </>
    );
};

export default BlocksPage;
