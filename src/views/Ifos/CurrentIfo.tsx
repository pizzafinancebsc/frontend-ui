import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pizzafinance/ui-sdk'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Buy PIZZA or CHS and BNB tokens')}</li>
            <li>{TranslateString(598, 'Get PIZZA-BNB or CHS-BNB LP tokens by adding PIZZA or CHS and BNB liquidity')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://cheeseswap.app/#/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb" mr="16px">
              {TranslateString(999, 'Buy Pizza')}
            </LinkExternal>
            <LinkExternal href="https://cheeseswap.app/#/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0xadd8a06fd58761a5047426e160b2b88ad3b9d464" mr="16px">
              {TranslateString(999, 'Buy Cheese')}
            </LinkExternal>
            <LinkExternal href="https://swap.pizzafinance.app/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82">
              {TranslateString(999, 'Get LP tokens')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(602, 'While the sale is live, commit your Cheese-LP tokens to buy the IDO tokens')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://t.me/PizzaFinance"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <Image src="/images/ido-shop.svg" alt="ido shop" width={436} height={406} responsive />
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IDO?')}</Title>
            <Text mb={3}>
              {TranslateString(
                514,
                'Launch your project with PizzaFinance, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.',
              )}
            </Text>
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQxi51mWTkB5bdH8_op_xFVpZMBMTM5HqswZRI2xLXtT5FsA/viewform"
              external
            >
              {TranslateString(516, 'Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
