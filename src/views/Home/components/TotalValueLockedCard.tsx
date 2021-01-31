import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Link } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'
// import { useGetStats } from 'hooks/api'

const StyledPartnerCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`
const CardImage = styled.img`
  margin: 2px;
`
const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const PartnerCard = () => {
  const TranslateString = useI18n()
//  const data = useGetStats()
//  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledPartnerCard>
      <CardBody>
      <Heading size="xl" mb="24px">
        {TranslateString(550, ' Partnership')}
      </Heading>
        <StyledLink href="https://cheeseswap.app/">
          <CardImage src="/images/cheeseswap.svg" alt="CheeseSwap logo" width={180} />
        </StyledLink>
        <StyledLink href="https://keep3rb.network/">
          <CardImage src="/images/keep3rb.svg" alt="Keep3rb logo" width={180} />
        </StyledLink>
      </CardBody>
    </StyledPartnerCard>
  )
}

export default PartnerCard
