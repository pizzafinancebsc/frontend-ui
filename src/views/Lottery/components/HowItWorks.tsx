import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image } from '@pizzafinance/ui-sdk'
import useI18n from 'hooks/useI18n'

const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <LayoutWrapper>
      <StyledImage src="/images/pizza-lottery-bg.png" alt="lottery bunny" width={163} height={140} />
      <StyledHeading size="lg" as="h3" color="secondary">
        {TranslateString(999, 'How it works')}
      </StyledHeading>
      <Text fontSize="16px">
        {TranslateString(
          999,
          'Spend PIZZA to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
        )}
      </Text>
<<<<<<< HEAD
      <StyledLink href="https://pizzafinance.app/">Read more</StyledLink>
=======
      <StyledLink href="#">Read more</StyledLink>
>>>>>>> a910aa378fb0d7f309cca924728fae4506d4c7cb
    </LayoutWrapper>
  )
}

export default HowItWorks
