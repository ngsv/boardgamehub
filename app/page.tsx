import Image from 'next/image'
import Link from 'next/link'
import { inter, roboto } from '@/app/ui/fonts'

import Button from '@/app/ui/button'

export default function Home() {
  return (
    <main className='flex h-screen w-screen'>
      <div className='max-h-sm bg-primary flex h-full w-5/12 max-w-4xl flex-col items-center justify-center text-white'>
        <h1
          className={`${inter.className} mb-6 text-5xl font-bold antialiased`}
        >
          BoardGameHub
        </h1>
        <p
          className={`${roboto.className} mb-14 text-xl font-medium antialiased`}
        >
          The source for all board game content
        </p>
        <div className={`${roboto.className} flex space-x-10 font-medium`}>
          <Link href='/register'>
            <Button
              buttonText='Register'
              className='hover:bg-orange-800'
            ></Button>
          </Link>
          <Link href='/login'>
            <Button buttonText='Login' className='hover:bg-orange-800'></Button>
          </Link>
        </div>
      </div>
      <div className='relative w-7/12 justify-end'>
        <Image
          src='/boardgame_background.jpg'
          fill
          className='object-cover'
          alt='Wallpaper background image of board game'
        />
      </div>
    </main>
  )
}
