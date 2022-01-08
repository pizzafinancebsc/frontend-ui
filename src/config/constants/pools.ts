import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [

{
 pastaId: 1,
 tokenName: 'BNB',
 earnToken: 'BNB',
 stakingTokenName: QuoteToken.KITTYWBNB,
 stakingTokenAddress: '0x61cCA94e696981c2Df97bC0e33E4a6583606732A',    //
 contractAddress: {
   97: '',
   56: '0x2661bFF98F4F5bFE5B058C8737f97aF41d3E3333',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://kittytoken.io/',
 harvest: true,
 tokenPerBlock: '1',
 sortOrder: 1,
 isFinished: false,
 tokenDecimals: 18,
},
{
 pastaId: 2,
 tokenName: 'BNB',
 earnToken: 'BNB',
 stakingTokenName: QuoteToken.KITTYCHS,
 stakingTokenAddress: '0xe02ce23ba2e9426a74069d5e2d6f0043d8d44667',    //
 contractAddress: {
   97: '',
   56: '0x1C40facA96f4cC8482819db84A6de078e81Ee0a8',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://kittytoken.io/',
 harvest: true,
 tokenPerBlock: '0.65',
 sortOrder: 2,
 isFinished: false,
 tokenDecimals: 18,
},
{
 pastaId: 3,
 tokenName: 'BNB',
 earnToken: 'BNB',
 stakingTokenName: QuoteToken.KITTYUSDT,
 stakingTokenAddress: '0xB18B577EF990f554D2685eA509Ff943aA926e585',    //
 contractAddress: {
   97: '',
   56: '0xF5e8281AbCF458EBf7851cF159141Cc9485a2d38',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://kittytoken.io/',
 harvest: true,
 tokenPerBlock: '0.75',
 sortOrder: 3,
 isFinished: false,
 tokenDecimals: 18,
},
{
 pastaId: 4,
 tokenName: 'BNB',
 earnToken: 'BNB',
 stakingTokenName: QuoteToken.KITTY,
 stakingTokenAddress: '0x5b4963B964bAc5C2Db83e53ffFe46E0cb83a1346',    //
 contractAddress: {
   97: '',
   56: '0x80dF3616C9E0403D63dDe4f08Bb3B178F945050F',
 },
 poolCategory: PoolCategory.CORE,
 projectLink: 'https://kittytoken.io/',
 harvest: true,
 tokenPerBlock: '0.45',
 sortOrder: 4,
 isFinished: false,
 tokenDecimals: 18,
},
]

export default pools
