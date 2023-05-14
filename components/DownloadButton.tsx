import { useRaffleStore } from '@/stores/raffleStore'
import { DownloadIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import { type RefObject } from 'react'
import html2canvas from 'html2canvas'
import confetti from 'canvas-confetti'
import { shallow } from 'zustand/shallow'

function useRaffleDownloadButtonStore() {
  return useRaffleStore(state => ({
    title: state.title
  }), shallow)
}

export default function DownloadButton({
  resRef
}: {
  resRef: RefObject<HTMLDivElement>
}) {
  const { title } = useRaffleDownloadButtonStore()
  const { colorMode } = useColorMode()

  const downloadImage = (imageDataUrl: string, filename: string) => {
    const a = document.createElement('a')
    a.href = imageDataUrl
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const captureAndDownload = async (
    componentRef: HTMLDivElement,
    filename: string
  ) => {
    const canvas = await html2canvas(componentRef)
    const image = canvas.toDataURL('image/png')
    downloadImage(image, filename)
  }

  const handleDownload = () => {
    confetti()
    captureAndDownload(resRef?.current as HTMLDivElement, title ?? 'rifa')
  }

  return (
    <>
      <button
        className={`bg-emerald-500 hover:bg-emerald-600 font-bold py-2 ${
          colorMode === 'light' ? 'text-white' : 'text-black'
        } px-4 rounded flex justify-center items-center gap-2`}
        onClick={handleDownload}
      >
        <DownloadIcon />
        Descargar
      </button>
    </>
  )
}
