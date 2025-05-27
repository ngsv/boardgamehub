import Image from 'next/image'
import { Suspense } from 'react'
import LoginForm from '../ui/LoginForm/login-form'

export default function LoginPage() {
  return (
    <main className='flex h-screen items-center justify-center'>
      <Image
        src='/boardgame_background.jpg'
        fill
        className='object-cover'
        alt='Wallpaper background image of board game'
      />
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  )
}
