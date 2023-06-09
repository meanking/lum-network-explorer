export const BASE_URL = process.env.REACT_APP_BASE_URL || '';
export const IS_TESTNET = BASE_URL.includes('testnet') || BASE_URL.includes('localhost') || BASE_URL.includes('127.0.0.1');

export const BLOCKS_URL = 'blocks';
export const TRANSACTIONS_URL = 'transactions';
export const VALIDATORS_URL = 'validators';
export const ACCOUNTS_URL = 'accounts';
export const SEARCH_URL = 'search';
export const KPI_URL = 'stats/kpi';
export const CHART_URL = 'stats/chart';
export const GOVERNANCE_URL = 'governance';
export const PROPOSALS_URL = 'proposals';
export const BEAMS_URL = 'beams';
export const LUM_URL = 'price';
export const DELEGATIONS_URL = 'delegations';
export const REDELEGATIONS_URL = 'redelegations';
export const UNBONDINGS_URL = 'unbondings';
export const PARAMETERS_URL = 'params';
export const ASSETS_URL = 'assets';
