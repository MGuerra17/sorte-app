import { Center, Flex } from '@chakra-ui/react'
import ResultContainer from '../ResultContainer'
import EditMenu from '../EditMenu'
import DownloadButton from '../DownloadButton'
import RaffleResult from '../RaffleResult'
import { createRef } from 'react'

export default function Result() {
  const resultRef = createRef<HTMLDivElement>()

  return (
    <ResultContainer>
      <Flex
        align='center'
        justify='space-between'
        height={14}
        paddingX={{ base: 4, md: 8 }}
        marginTop={3}
      >
        <EditMenu />
        <DownloadButton resRef={resultRef} />
      </Flex>
      <Center className='flex-1'>
        <RaffleResult resRef={resultRef} />
      </Center>
    </ResultContainer>
  )
}
