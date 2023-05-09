import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'

export default function ResultContainer({
  children
}: {
  children: React.ReactNode
}) {
  const { colorMode } = useColorMode()
  return (
    <Flex
      direction='column'
      width='full'
      backgroundColor={colorMode === 'light' ? 'gray.50' : '#161b25'}
      maxHeight='100vh'
      paddingBottom={10}
    >
      {children}
    </Flex>
  )
}
