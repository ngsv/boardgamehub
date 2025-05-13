import Image from 'next/image'
import RegisterForm from '../ui/register-form'

export default function RegisterPage() {
  return (
    <main className='flex h-screen items-center justify-center'>
      <Image
        src='/boardgame_background.jpg'
        fill
        className='object-cover'
        alt='Wallpaper background image of board game'
      />

      <RegisterForm />
    </main>
  )
}
