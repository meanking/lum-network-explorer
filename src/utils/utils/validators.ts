import { ValidatorsModel } from 'models';

export const calculateTotalVotingPower = (validators: ValidatorsModel[]): number => {
    let total = 0;

    validators.forEach((value) => {
        total += parseFloat(value.delegatorShares || '0');
    });

    return total;
};

export const findRank = (validators: ValidatorsModel[], validator: ValidatorsModel): number | null => {
    const index = validators.findIndex((value) => value.operatorAddress === validator.operatorAddress);

    if (index === -1) {
        return null;
    }

    return index + 1;
};