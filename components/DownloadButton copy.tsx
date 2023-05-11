import { useRaffleStore } from '@/stores/raffleStore'
import { DownloadIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import { type RefObject } from 'react'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { useScreenshot, createFileName } = require('use-react-screenshot')

export default function DownloadButton({
  resRef
}: {
  resRef: RefObject<HTMLDivElement>
}) {
  const { title } = useRaffleStore()
  const { colorMode } = useColorMode()
  const [, takeScreenshot] = useScreenshot()

  const download = (image: string, { extension = 'png' } = {}) => {
    const a = document.createElement('a')
    const filename = title !== null && title !== '' ? title : 'rifa'
    a.href = image
    a.download = createFileName(extension, filename)
    a.click()
  }
  const downloadScreenshot = () => takeScreenshot(resRef.current).then(download)
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 font-bold py-2 ${
        colorMode === 'light' ? 'text-white' : 'text-black'
      } px-4 rounded flex justify-center items-center gap-2`}
      onClick={downloadScreenshot}
    >
      <DownloadIcon />
      Descargar
    </button>
  )
}
