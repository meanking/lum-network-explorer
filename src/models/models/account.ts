import { Expose, Type } from 'class-transformer';
import TransactionsModel from './transactions';
import AmountModel from './amount';
import DelegationsModel from './delegations';

class AllRewards {
    total: AmountModel[] = [];
}

class AccountModel {
    address?: string;

    @Expose({ name: 'public_key' })
    publicKey?: string;

    @Expose({ name: 'account_number' })
    accountNumber?: number;

    sequence?: number;

    @Expose({ name: 'withdraw_address' })
    withdrawAddress?: string;

    @Type(() => TransactionsModel)
    transactions: TransactionsModel[] = [];

    coins: AmountModel[] = [];

    @Type(() => AllRewards)
    @Expose({ name: 'all_rewards' })
    allRewards: AllRewards = new AllRewards();

    @Type(() => DelegationsModel)
    delegations: DelegationsModel[] = [];
}

export default AccountModel;
