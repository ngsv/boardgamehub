'use client'

import { useSearchParams } from 'next/navigation'

import SearchTableItem from './search-table-item'
import { searchAllGames } from '@/app/lib/queries'

type SearchTableProps = {
  games: Awaited<ReturnType<typeof searchAllGames>>
}

export default function SearchTable({ games }: SearchTableProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')?.toLowerCase() || ''

  const results =
    query !== ''
      ? games.filter(game => game.title.toLowerCase().includes(query))
      : []

  return (
    <table className='mt-10 w-full bg-slate-50'>
      <thead className='h-11 bg-slate-100'>
        <tr className='flex h-11 w-full'>
          <th className='w-32'></th>
          <th scope='col' className='flex items-center pl-4'>
            Title
          </th>
        </tr>
      </thead>

      <tbody>
        {results.length > 0 &&
          results.map(game => (
            <tr
              key={game._id}
              className='border-b-2 first-of-type:rounded-t-xl last-of-type:border-none'
            >
              <SearchTableItem
                id={game._id}
                title={game.title}
                image={game.image}
              />
            </tr>
          ))}
      </tbody>
    </table>
  )
}
