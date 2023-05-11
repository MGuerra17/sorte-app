import { FormControl, FormLabel } from '@chakra-ui/react'
import Dropzone from 'react-dropzone'
import ImageIcon from './icons/ImageIcon'
import { useState } from 'react'
import { useRaffleStore } from '@/stores/raffleStore'
import ImageInputText from './ImageInputText'

export default function ImageInput({ title }: { title: string }) {
  const [isDragActive, setIsDragActive] = useState<boolean>(false)
  const { image, setImage } = useRaffleStore()
  const uploadImage = (acceptedFiles: File[]) => {
    setImage(URL.createObjectURL(acceptedFiles[0]))
  }

  return (
    <FormControl isInvalid={false} className='w-full'>
      <FormLabel marginBottom={2.5}>{title}</FormLabel>
      <Dropzone
        onDrop={uploadImage}
        onDragEnter={() => {
          setIsDragActive(true)
        }}
        onDragLeave={() => {
          setIsDragActive(false)
        }}
        maxFiles={1}
        accept={{ 'image/jpeg': ['.jpeg'], 'image/png': ['.png'] }}
      >
        {({ getRootProps, getInputProps }) => (
          <section
            className={`text-xs cursor-pointer transition-all outline-dashed outline-2 outline-gray-500 p-2 rounded-md ${
              isDragActive ? 'bg-gray-500/20' : ''
            }`}
          >
            <div
              {...getRootProps()}
              className='flex gap-x-1 justify-center items-center'
            >
              <input {...getInputProps()} />
              <ImageIcon width={20} height={20} />
              <ImageInputText isDragActive={isDragActive} image={image} />
            </div>
          </section>
        )}
      </Dropzone>
    </FormControl>
  )
}
