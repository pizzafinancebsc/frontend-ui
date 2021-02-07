import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    earnToken: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    contractAddress: {
      97: '',
      56: '0xD3849bCefE2D032b7EA4e01aA18EA5D1797bdcc6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '0.04',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 {
 pastaId: 5,
 tokenName: 'HOTS',
 earnToken: 'HOTS',
 stakingTokenName: QuoteToken.PIZZA,
 stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
 contractAddress: {
   97: '',
   56: '0x7cAA197cdc8c6b878d5a44b3D0bcdFc7cc6AA66c',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://hotdog.cafe/',
 harvest: false,
 tokenPerBlock: '0.03',
 sortOrder: 4,
 isFinished: true,
 tokenDecimals: 18,
},
{
 pastaId: 3,
 tokenName: 'KP3RB',
 earnToken: 'PIZZA',
 stakingTokenName: QuoteToken.KP3RB,
 stakingTokenAddress: '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',    //
 contractAddress: {
   97: '',
   56: '0x84d20c47dbFd67DFb9449CAc8076c27889bEb365',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://keep3rb.network/',
 harvest: true,
 tokenPerBlock: '0.40',
 sortOrder: 2,
 isFinished: false,
 tokenDecimals: 18,
},
{
 pastaId: 4,
 tokenName: 'CHS',
 earnToken: 'PIZZA',
 stakingTokenName: QuoteToken.CHS,
 stakingTokenAddress: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',    //
 contractAddress: {
   97: '',
   56: '0x50256622Ed594239AFAf7D6aaC2A852aDfBD741c',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://cheeseswap.app/',
 harvest: true,
 tokenPerBlock: '0.70',
 sortOrder: 3,
 isFinished: false,
 tokenDecimals: 18,
},
{
 pastaId: 1,
 tokenName: 'CHS',
 earnToken: 'CHS',
 stakingTokenName: QuoteToken.PIZZA,
 stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
 contractAddress: {
   97: '',
   56: '0xA647312aeD03a4D955D962E072e11032774D96Bf',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://cheeseswap.app/',
 harvest: false,
 tokenPerBlock: '0.025',
 sortOrder: 5,
 isFinished: true,
 tokenDecimals: 18,
},
{
pastaId: 2,
tokenName: 'KP3RB',
earnToken: 'KP3RB',
stakingTokenName: QuoteToken.PIZZA,
stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
contractAddress: {
  97: '',
  56: '0x65932e719B1108516B5d0A5cFdB6508A1268cAc2',
},
poolCategory: PoolCategory.CORE,
projectLink: 'https://keep3rb.network/',
harvest: false,
tokenPerBlock: '0.001',
sortOrder: 6,
isFinished: true,
tokenDecimals: 18,
},
]

export default pools
