import Head from 'next/head'
import { Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>fullset</title>
        <meta name="description" content="fullset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p={10}>
            <Text align={'center'}>hello world</Text>
        </Box>
      </main>
    </>
  )
}
