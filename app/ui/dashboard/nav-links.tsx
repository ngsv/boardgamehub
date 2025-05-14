import Link from 'next/link'
import { roboto } from '../fonts'
import { TableCellsIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function NavLinks() {
  return (
    <div className={`${roboto.className} flex flex-col space-y-2 font-medium`}>
      <Link
        href='/'
        className='flex h-12 items-center rounded-md bg-slate-50 pl-5 hover:bg-orange-200'
      >
        <TableCellsIcon className='w-6' />
        <div className='ml-2'>Browse</div>
      </Link>
      <Link
        href='/'
        className='flex h-12 items-center rounded-md bg-slate-50 pl-5 hover:bg-orange-200'
      >
        <GlobeAltIcon className='w-6' />
        <div className='ml-2'>Explore</div>
      </Link>
      <Link
        href='/'
        className='flex h-12 items-center rounded-md bg-slate-50 pl-5 hover:bg-orange-200'
      >
        <MagnifyingGlassIcon className='w-6' />
        <div className='ml-2'>Search</div>
      </Link>
    </div>
  )
}
