import { createModel } from '@rematch/core';
import { RootModel } from '../index';
import { MetadataModel, ProposalsModel, ProposalDepositorsModel, ProposalVotersModel } from 'models';
import { ApiGovernance } from 'api';

interface GovernanceState {
    proposals: ProposalsModel[];
    proposal: ProposalsModel | null;
    voters: ProposalVotersModel[];
    depositors: ProposalDepositorsModel[];
    votersMetadata?: MetadataModel;
    depositorsMetadata?: MetadataModel;
}

const governance = createModel<RootModel>()({
    state: {
        proposals: [],
        proposal: null,
        voters: [],
        depositors: [],
    } as GovernanceState,
    reducers: {
        SET_PROPOSALS(state, proposals: ProposalsModel[]) {
            return {
                ...state,
                proposals: proposals.sort((a, b) => b.proposalId.toNumber() - a.proposalId.toNumber()),
            };
        },
        SET_PROPOSAL(state, proposal: ProposalsModel) {
            return {
                ...state,
                proposal,
            };
        },
        SET_VOTERS(state, voters: ProposalVotersModel[], votersMetadata: MetadataModel) {
            return {
                ...state,
                voters,
                votersMetadata,
            };
        },
        SET_DEPOSITORS(state, depositors: ProposalDepositorsModel[], depositorsMetadata: MetadataModel) {
            return {
                ...state,
                depositors,
                depositorsMetadata,
            };
        },
        RESET_PROPOSAL(state) {
            return {
                ...state,
                proposal: null,
            };
        },
    },
    effects: (dispatch) => ({
        async fetchProposals() {
            const proposals = await ApiGovernance.fetchProposals();

            dispatch.governance.SET_PROPOSALS(proposals);
        },

        async getProposal(id: string) {
            dispatch.governance.RESET_PROPOSAL();

            const proposal = await ApiGovernance.getProposal(id);

            proposal.result = await ApiGovernance.getTally(id);

            dispatch.governance.SET_PROPOSAL(proposal);
        },

        async getVoters({ id, page }: { id: string; page: number }) {
            const [proposalVoter, proposalVoterMetadata] = await ApiGovernance.getVoters(id, page);

            if (!proposalVoter) {
                return;
            }

            dispatch.governance.SET_VOTERS(proposalVoter, proposalVoterMetadata);
        },

        async getDepositors({ id, page }: { id: string; page: number }) {
            const [proposalDepositor, proposalDepositsMetadata] = await ApiGovernance.getDepositors(id, page);

            if (!proposalDepositor) {
                return;
            }

            dispatch.governance.SET_DEPOSITORS(proposalDepositor, proposalDepositsMetadata);
        },

        async getTally(id: string) {
            return await ApiGovernance.getTally(id);
        },
    }),
});

export default governance;
