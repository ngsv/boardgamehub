import Link from 'next/link'
import NavLinks from './nav-links'

import { PowerIcon } from '@heroicons/react/24/solid'

import { signOut } from '@/auth'
import { lusitana, roboto } from '../fonts'

export default function SideNav() {
  return (
    <div className='round-lg flex w-full flex-col px-3 py-4 md:h-full md:w-64'>
      <Link
        href='/'
        className='flex h-20 items-center rounded-md bg-primary pl-5 text-3xl font-bold md:h-2/6 md:max-h-48 md:min-h-20 md:justify-center md:pl-0'
      >
        <div className={`${lusitana.className} text-white`}>BGH</div>
      </Link>

      <div className='mt-2 flex grow flex-row justify-between space-x-1 md:flex-col md:space-x-0'>
        <NavLinks />
        <div className='my-2 h-auto rounded-md bg-slate-50 md:grow'></div>
        <form
          action={async () => {
            'use server'
            await signOut({ redirectTo: '/' })
          }}
          className={`${roboto.className} flex h-12 items-center rounded-md bg-slate-50 hover:bg-orange-200`}
        >
          <button className='flex h-full w-14 items-center justify-center hover:text-primary md:w-full md:justify-start md:pl-5'>
            <PowerIcon className='w-6' />
            <div className='ml-2 hidden font-medium md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
