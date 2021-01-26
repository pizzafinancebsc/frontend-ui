import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

const Nfts: Nft[] = [
  {
    name: 'Swapsies',
    description: 'These bunnies love nothing more than swapping pancakes. Especially on BSC.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'swapsies-preview.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 999,
    bunnyId: 0,
  },
]

export default Nfts
