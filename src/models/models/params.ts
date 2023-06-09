import { Expose, Type } from 'class-transformer';
import CoinModel from './coin';

// Mint

class Inflation {
    @Expose({ name: 'rate_change' })
    rateChange: number;

    min: number;
    max: number;
    current: number;
}

class MintParams {
    denom: string;

    @Type(() => Inflation)
    inflation: Inflation;

    @Expose({ name: 'goal_bonded' })
    goalBonded: number;

    @Expose({ name: 'blocks_per_year' })
    blocksPerYear: number;
}

// Staking

class StakingParams {
    @Expose({ name: 'unbonding_time' })
    unbondingTime: number;

    @Expose({ name: 'max_validators' })
    maxValidators: number;

    @Expose({ name: 'max_entries' })
    maxEntries: number;

    @Expose({ name: 'denom' })
    bondDenom: string;

    @Expose({ name: 'historical_entries' })
    historicalEntries: number;
}

// Governance

class Vote {
    period: number;
}

class Deposit {
    @Type(() => CoinModel)
    minimum: CoinModel[];

    period: number;
}

class Tally {
    quorum: number;
    threshold: number;
    veto_threshold: number;
}

class GovParams {
    @Type(() => Vote)
    vote: Vote;

    @Type(() => Deposit)
    deposit: Deposit;

    @Type(() => Tally)
    tally: Tally;
}

// Distribution

class DistributionParams {
    @Expose({ name: 'community_tax' })
    communityTax: number;

    @Expose({ name: 'base_proposer_reward' })
    baseProposerReward: number;

    @Expose({ name: 'bonus_proposer_reward' })
    bonusProposerReward: number;

    @Expose({ name: 'withdraw_address_enabled' })
    withdrawAddrEnabled: boolean;
}

// Slashing

class SlashingParams {
    @Expose({ name: 'slash_fraction_double_sign' })
    slashFractionDoubleSign: string;

    @Expose({ name: 'slash_fraction_downtime' })
    slashFractionDowntime: string;

    @Expose({ name: 'downtime_jail_duration' })
    downtimeJailDuration: number;

    @Expose({ name: 'signed_blocks_window' })
    signedBlocksWindow: number;

    @Expose({ name: 'min_signed_per_window' })
    minSignedPerWindow: string;
}

class ParamsModel {
    @Expose({ name: 'chain_id' })
    chainId: string;

    @Type(() => MintParams)
    mint: MintParams;

    @Type(() => StakingParams)
    staking: StakingParams;

    @Type(() => GovParams)
    gov: GovParams;

    @Type(() => DistributionParams)
    distribution: DistributionParams;

    @Type(() => SlashingParams)
    slashing: SlashingParams;
}

export default ParamsModel;
