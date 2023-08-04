// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({
    children
  }: {
  children: React.ReactNode
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

// // pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'

// // 1. Import the extendTheme function
// import { extendTheme } from '@chakra-ui/react'

// // 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// export const theme = extendTheme({ colors })

// // 3. Pass the `theme` prop to the `ChakraProvider`
// function App({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default App