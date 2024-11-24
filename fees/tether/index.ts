import { buildStablecoinAdapter} from "./attestations-stablecoins";

export default buildStablecoinAdapter('1',
// Based on https://tether.to/en/transparency/?tab=reports
[
    {
        time: '2024-09', // time of report
        circulation: 119.3, // billions of USDC in circulation
        allocated: 84.5 + 12.5 + 1.5 + 6.4, // billions in tbills + repos + money market funds
        tbillRate: 5.287 // % interest earned in treasury bills
    }

]);