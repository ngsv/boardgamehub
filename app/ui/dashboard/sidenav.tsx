import Link from 'next/link'
import NavLinks from './nav-links'

import { PowerIcon } from '@heroicons/react/24/solid'

import { signOut } from '@/auth'
import { lusitana, roboto } from '../fonts'

export default function SideNav() {
  return (
    <div className='flex h-full w-64 flex-col rounded-lg px-3 py-4'>
      <Link
        href='/'
        className='flex h-2/6 max-h-48 items-center justify-center rounded-lg bg-primary text-5xl font-bold'
      >
        <div className={`${lusitana.className} text-white`}>BGH</div>
      </Link>

      <div className='mt-3 flex grow flex-col justify-between'>
        <NavLinks />
        <div className='my-2 h-auto grow rounded-md bg-slate-50'></div>
        <form
          action={async () => {
            'use server'
            await signOut({ redirectTo: '/' })
          }}
          className={`${roboto.className} flex h-12 items-center rounded-md bg-slate-50 hover:bg-orange-200`}
        >
          <button className='flex h-full w-full items-center pl-5'>
            <PowerIcon className='w-6' />
            <div className='ml-2 font-medium'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
