import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { calculatePizzaEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'
import { Address } from 'config/constants/types'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  pizzaPrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  pizzaPrice,
  apy,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const farmApy = apy.times(new BigNumber(100)).toNumber()
  const oneThousandDollarsWorthOfPizza = 1000 / pizzaPrice.toNumber()

  const pizzaEarnedPerThousand1D = calculatePizzaEarnedPerThousandDollars({ numberOfDays: 1, farmApy, pizzaPrice })
  const pizzaEarnedPerThousand7D = calculatePizzaEarnedPerThousandDollars({ numberOfDays: 7, farmApy, pizzaPrice })
  const pizzaEarnedPerThousand30D = calculatePizzaEarnedPerThousandDollars({ numberOfDays: 30, farmApy, pizzaPrice })
  const pizzaEarnedPerThousand365D = calculatePizzaEarnedPerThousandDollars({ numberOfDays: 365, farmApy, pizzaPrice })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'PIZZA per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pizzaEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfPizza })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pizzaEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pizzaEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfPizza })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pizzaEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pizzaEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfPizza })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pizzaEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: pizzaEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfPizza })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{pizzaEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          999,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={`https://cheeseswap.app/#/add/${liquidityUrlPathParts}`}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
