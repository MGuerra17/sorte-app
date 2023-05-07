'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({
  fonts: { heading: inter.style.fontFamily, body: inter.style.fontFamily },
  config
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
