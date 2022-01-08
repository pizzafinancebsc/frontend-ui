import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@kittylabs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xxl">404</Heading>
        <Text mb="16px">{TranslateString(999, 'Oops, page not found.')}</Text>
        <Button as="a" href="/" >
          {TranslateString(999, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
