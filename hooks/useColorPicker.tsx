import { createRef, useEffect, useState } from 'react'

export default function useColorPicker() {
  const [show, setShow] = useState<boolean>(false)
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current !== null && !ref.current.contains(event.target as Node)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  return { show, setShow, ref }
}
