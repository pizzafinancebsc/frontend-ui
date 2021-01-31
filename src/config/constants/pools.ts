import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    contractAddress: {
      97: '',
      56: '0xD3849bCefE2D032b7EA4e01aA18EA5D1797bdcc6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
   pastaId: 1,
   tokenName: 'CHS',
   stakingTokenName: QuoteToken.PIZZA,
   stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
   contractAddress: {
     97: '',
     56: '0xA647312aeD03a4D955D962E072e11032774D96Bf',
   },
   poolCategory: PoolCategory.CORE,
   projectLink: 'https://cheeseswap.app/',
   harvest: true,
   tokenPerBlock: '0.025',
   sortOrder: 999,
   isFinished: false,
   tokenDecimals: 18,
 },
 {
  pastaId: 2,
  tokenName: 'KP3RB',
  stakingTokenName: QuoteToken.PIZZA,
  stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
  contractAddress: {
    97: '',
    56: '0x65932e719B1108516B5d0A5cFdB6508A1268cAc2',
  },
  poolCategory: PoolCategory.CORE,
  projectLink: 'https://keep3rb.network/',
  harvest: true,
  tokenPerBlock: '0.001',
  sortOrder: 999,
  isFinished: false,
  tokenDecimals: 18,
},
{
 pastaId: 3,
 tokenName: 'HOTS',
 stakingTokenName: QuoteToken.PIZZA,
 stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',    //
 contractAddress: {
   97: '',
   56: '0x7cAA197cdc8c6b878d5a44b3D0bcdFc7cc6AA66c',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://hotdog.cafe/',
 harvest: true,
 tokenPerBlock: '0.05',
 sortOrder: 999,
 isFinished: false,
 tokenDecimals: 18,
},
]

export default pools
