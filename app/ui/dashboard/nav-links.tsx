'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { roboto } from '../fonts'
import { TableCellsIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <div
      className={`${roboto.className} flex w-full flex-row justify-evenly space-x-2 font-medium md:flex-col md:space-x-0 md:space-y-2`}
    >
      <Link
        href='/dashboard'
        className={clsx(
          'flex h-12 w-full min-w-14 items-center justify-center rounded-md bg-slate-50 hover:bg-orange-200 hover:text-primary md:justify-start md:pl-5',
          { 'bg-orange-200 text-primary': pathname === '/dashboard' }
        )}
      >
        <GlobeAltIcon className='w-6' />
        <div className='ml-2 hidden md:block'>Explore</div>
      </Link>
      <Link
        href='/dashboard/browse'
        className={clsx(
          'flex h-12 w-full min-w-14 items-center justify-center rounded-md bg-slate-50 hover:bg-orange-200 hover:text-primary md:justify-start md:pl-5',
          { 'bg-orange-200 text-primary': pathname === '/dashboard/browse' }
        )}
      >
        <TableCellsIcon className='w-6' />
        <div className='ml-2 hidden md:block'>Browse</div>
      </Link>
      <Link
        href='/dashboard/search'
        className={clsx(
          'flex h-12 w-full min-w-14 items-center justify-center rounded-md bg-slate-50 hover:bg-orange-200 hover:text-primary md:justify-start md:pl-5',
          { 'bg-orange-200 text-primary': pathname === '/dashboard/search' }
        )}
      >
        <MagnifyingGlassIcon className='w-6' />
        <div className='ml-2 hidden md:block'>Search</div>
      </Link>
    </div>
  )
}
