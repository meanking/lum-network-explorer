import { createModel } from '@rematch/core';
import { RootModel } from '../index';
import { StatsModel, LumModel } from 'models';
import { plainToClass } from 'class-transformer';
import ExplorerApi, { ApiStats } from 'api';

interface CoreState {
    stats: StatsModel;
    lum: LumModel;
}

const core = createModel<RootModel>()({
    state: {
        stats: plainToClass(StatsModel, null),
        lum: plainToClass(LumModel, null),
    } as CoreState,
    reducers: {
        SET_STATS(state, stats: StatsModel) {
            return {
                ...state,
                stats,
            };
        },

        SET_LUM(state, lum: LumModel) {
            return {
                ...state,
                lum,
            };
        },
    },
    effects: (dispatch) => {
        const client = ExplorerApi;

        return {
            async getStats() {
                const stats = await ApiStats.getStats();

                //FIXME
                stats.totalReviews = 1584645;
                stats.totalMerchants = 1482;
                stats.totalRewards = 125818241459.4854758;
                stats.todayRewards = 14857.84;

                dispatch.core.SET_STATS(stats);
            },

            async getLum() {
                const [lum] = await client.getLum();

                dispatch.core.SET_LUM(lum);
            },
        };
    },
});

export default core;
