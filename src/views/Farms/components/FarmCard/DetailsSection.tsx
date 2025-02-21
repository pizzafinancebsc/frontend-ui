import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
// import BigNumber from 'bignumber.js'
import { Text, Flex, Link, LinkExternal } from '@pizzafinance/ui-sdk'
// import { Farm } from 'state/types'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'

export interface TokenAddressesObject {
  56?: string
  97?: string
}

export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: TokenAddressesObject
  quoteTokenSymbol?: string
  tokenAddresses: TokenAddressesObject
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  removed,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
//  const lpAddress = getLpAddress()
  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={`https://cheeseswap.app/#/add/${liquidityUrlPathParts}`}>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
     <Flex justifyContent="space-between">
          <Text>{TranslateString(23, ' ')}</Text>
      {/*    <StyledLinkExternal href={`https://info.cheeseswap.app/pair/${tokenAddresses}`}>
            {lpLabel}
          </StyledLinkExternal> */}
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
