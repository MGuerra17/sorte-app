import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import Tippy from '@tippyjs/react'

export default function ColorPicker() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <Text
        onClick={() => {
          setShow(!show)
        }}
      >
        Color
      </Text>
      <Tippy
        visible={show}
        content={<ColorPicker />}
        placement='bottom-start'
        onClickOutside={() => {
          setShow(false)
        }}
      >
        <button>My button</button>
      </Tippy>
    </div>
  )
}
