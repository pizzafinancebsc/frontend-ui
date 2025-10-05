import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import PizzaStats from './components/PizzaStats'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import EarnAPYCard from './components/EarnAPYCard'
import EarnAssetCard from './components/EarnAssetCard'
// import WinCard from './components/WinCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pizza-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/home-bg.svg'), url('/images/home-bg2.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'PizzaFinance')}
        </Heading>
        <Text>{TranslateString(578, 'The Best Modern Yield Farm on Binance Smart Chain.')}</Text>
      </Hero>
      <div>
      <Cards>
        <FarmStakingCard />
        <TotalValueLockedCard />
      </Cards>
      <CTACards>
        <EarnAPYCard />
        <EarnAssetCard />
        </CTACards>
        <PizzaStats />
      <Cards>
      {/*   */}  
      </Cards>
      </div>
    </Page>
  )
}

export default Home
