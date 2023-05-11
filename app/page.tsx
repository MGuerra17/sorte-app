'use client'

import ControlPanel from '@/components/ControlPanel'
import Result from '@/components/icons/Result'

export default function Home() {
  return (
    <main className='w-full flex flex-wrap md:flex-nowrap min-h-screen'>
      <ControlPanel />
      <Result />
    </main>
  )
}
