import Images from '@components/Images/Images'
import { url } from 'inspector'
import Image from 'next/image'
import Homepage from './homepage'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Homepage />
    </main>
  )
}
