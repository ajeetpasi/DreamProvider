import Image from 'next/image'
import MainCard from './components/cards/Cards'
import HISonu from '../../../assignment/src/app/TespApi'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <MainCard />
      {/* <HISonu /> */}
    </main>
  )
}
