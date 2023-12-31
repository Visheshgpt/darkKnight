import { SerializedFarmConfig } from '@pancakeswap/farms'
import { FantomTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 30,
    lpSymbol: 'lzUSDC-dKnight LP',
    lpAddress: '0x0d587c8780E9611f825A84148EA7BA54Cc0B1878',
    token: FantomTokens.dknight,
    quoteToken: FantomTokens.usdc,
  },
  {
    pid: 1,
    lpSymbol: 'dKnight-WFTM LP',
    lpAddress: '0xD519AE779eb7987cdddA63be2CEffE0C35759E04',
    token: FantomTokens.dknight,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 29,
    lpSymbol: 'lzUSDC-WFTM LP',
    lpAddress: '0xc50cF35ea4AB37cb71382de5a4c1D72a7667F0E3',
    token: FantomTokens.usdc,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 3,
    lpSymbol: 'dKNIGHT',
    lpAddress: '0x6cc0e0aedbbd3c35283e38668d959f6eb3034856',
    isToken: true,
    token: FantomTokens.dknight,
    quoteToken: FantomTokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'WFTM-UNDEAD LP',
    lpAddress: '0xBfBC8eeC9d24eb10702D7F233d6cf687D8F1b2b4',
    token: FantomTokens.undead,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 5,
    lpSymbol: 'fUSDT-dKNIGHT LP',
    lpAddress: '0xb459DFcA113E55842d4f9577D896F4EFF6Ddb11F',
    token: FantomTokens.dknight,
    quoteToken: FantomTokens.fusdt,
  },
  {
    pid: 6,
    lpSymbol: 'WFTM-multiWETH LP',
    lpAddress: '0xbE612c02BeE4b9FEb6B38693510c6C2a2028866d',
    token: FantomTokens.weth,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 7,
    lpSymbol: 'USDC-fUSDT LP',
    lpAddress: '0x10Ee429ed505498E84F071460716Dd0b9068f29f',
    token: FantomTokens.fusdt,
    quoteToken: FantomTokens.usdc,
  },
  {
    pid: 8,
    lpSymbol: 'WFTM-BTC LP',
    lpAddress: '0xEDd43f16aEF83960AB7b3f2F66835e1e6e0CFB33',
    token: FantomTokens.wbtc,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 9,
    lpSymbol: 'WFTM-DAI LP',
    lpAddress: '0x4F4A0B4CF5ba98264A67726633d3cdEf392411a9',
    token: FantomTokens.dai,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 10,
    lpSymbol: 'WFTM-FATCKE LP',
    lpAddress: '0x8b65868407f3c60C405d2AF096c92247Ed1F7c33',
    token: FantomTokens.fatcake,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 11,
    lpSymbol: 'WFTM-fDLAUNCH LP',
    lpAddress: '0x6B94F5C3944CEb619b718C6aA868DD8374e5aF4a',
    token: FantomTokens.fdlaunch,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 12,
    lpSymbol: 'WFTM-DEP LP',
    lpAddress: '0x503880630DAE08BA6c60C52F2632Abce7Ff34CBF',
    token: FantomTokens.dep,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 13,
    lpSymbol: 'WFTM-DUO LP',
    lpAddress: '0x10dA5667874782624905331964dB64B1197866C0',
    token: FantomTokens.duo,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 14,
    lpSymbol: 'USDC-DFY LP',
    lpAddress: '0x203056e0dfE3Eca755eb060e438242a4F559B7d8',
    token: FantomTokens.dfy,
    quoteToken: FantomTokens.usdc,
  },
  {
    pid: 15,
    lpSymbol: 'WFTM-AOD LP',
    lpAddress: '0x98e0d6A39863E1867b5C35655631129DBd78f22C',
    token: FantomTokens.aod,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 16,
    lpSymbol: 'FLORY-WFTM LP',
    lpAddress: '0xa8213d26B19a2184db4200A07ab1C9FA51b058dA',
    token: FantomTokens.flory,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 17,
    lpSymbol: 'WFTM-FTMO LP',
    lpAddress: '0x46f702bb9F114BAA762ce1312C27f028E99C7382',
    token: FantomTokens.ftmo,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 18,
    lpSymbol: 'WFTM-fNAUT LP',
    lpAddress: '0xf429c5a44f98661c52910938e205Ca7e419E9731',
    token: FantomTokens.naut,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 19,
    lpSymbol: 'STABLE-WFTM LP',
    lpAddress: '0xFC8af2E2C98CBb73Ebf3A5e42bc43f27f271dd20',
    token: FantomTokens.stable,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 20,
    lpSymbol: 'FAST-WFTM LP',
    lpAddress: '0xFee526a245dbF5604189D5Cb86A293CD678De262',
    token: FantomTokens.fast,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 21,
    lpSymbol: 'WFTM-MP LP',
    lpAddress: '0x20D3BA695fd89053E40C463D68e4Ec16a50B40e2',
    token: FantomTokens.mp,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 22,
    lpSymbol: 'WFTM-THUNDER LP',
    lpAddress: '0x17187a8fDcE62667aC55cD1Af9c5cf8c2a6ED603',
    token: FantomTokens.thunder,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 23,
    lpSymbol: 'WFTM-fSPA LP',
    lpAddress: '0x6A70B13bdcf84d0D7F399d3E892c290E59a7E317',
    token: FantomTokens.fspa,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 24,
    lpSymbol: 'WFTM-PROTO LP',
    lpAddress: '0x4fd0317205eB0D36827A966AC635D28654cCE71b',
    token: FantomTokens.proto,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 25,
    lpSymbol: 'WFTM-FLIBERO LP',
    lpAddress: '0x175e8a023D20b62E5E8570c81f03a75ec448Fd07',
    token: FantomTokens.flibero,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 26,
    lpSymbol: 'WFTM-ASNT LP',
    lpAddress: '0x8d9221A0cd46ba97DbC303397447BB983925364B',
    token: FantomTokens.asnt,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 27,
    lpSymbol: 'WFTM-BNB LP',
    lpAddress: '0xe0CCAdEA043e82A1d4461167D395D17755C2dA85',
    token: FantomTokens.bnb,
    quoteToken: FantomTokens.wfantom,
  },
  {
    pid: 0,
    lpSymbol: 'USDC-Knight LP',
    lpAddress: '0x68D47D67b893c44A72BCAC39b1b658D4Cbdf87CA',
    token: FantomTokens.dknight,
    quoteToken: FantomTokens.usdc,
  },
  {
    pid: 2,
    lpSymbol: 'USDC-WFTM LP',
    lpAddress: '0xB733654453404AAb46d34E68fF24415F5f588C21',
    token: FantomTokens.usdc,
    quoteToken: FantomTokens.wfantom,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
