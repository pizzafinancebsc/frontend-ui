import { AbiItem } from 'web3-utils'
import { getContract } from 'utils/web3'
import { ContractOptions } from 'web3-eth-contract'
import rabbitmintingfarm from 'config/abi/rabbitmintingfarm.json'
import pizzaRabbits from 'config/abi/pizzaRabbits.json'
import { RABBIT_MINTING_FARM_ADDRESS, PIZZA_RABBITS_ADDRESS } from 'config/constants/nfts'

// TODO: Figure out how to add current account to contracts to write methods can be used

export const getRabbitMintingContract = (contractOptions?: ContractOptions) => {
  const rabbitMintingFarmAbi = (rabbitmintingfarm as unknown) as AbiItem
  return getContract(rabbitMintingFarmAbi, RABBIT_MINTING_FARM_ADDRESS, contractOptions)
}

export const getPancakeRabbitContract = (contractOptions?: ContractOptions) => {
  const pizzaRabbitsAbi = (pizzaRabbits as unknown) as AbiItem
  return getContract(pizzaRabbitsAbi, PIZZA_RABBITS_ADDRESS, contractOptions)
}

export default getRabbitMintingContract
