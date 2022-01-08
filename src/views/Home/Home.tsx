import React from 'react'
import styled from 'styled-components'
import { Heading, Text} from '@kittylabs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'


import Pasta from '../Pools'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;


  }
`


const CTACards = styled.div`
  align-items: start;
  margin-bottom: 32px;

`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'KITTY BNB Miner')}
        </Heading>
        <Text><h1>{TranslateString(578, 'KITTY BNB Miner is the best profitable pool mining in BSC eco-system.')}</h1></Text>
      </Hero>
      <div>

      <CTACards>
       <Pasta />
      </CTACards>

      </div>
    </Page>
  )
}

export default Home
