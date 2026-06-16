'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

import type { BoardGame } from '@/app/lib/definitions'
import BoardGameTableItem from '../BoardGameTableItem/boardgame-table-item'

type BoardGameTableProps = {
  boardgames: BoardGame[]
  sort: string
  order: string
}

export default function BoardGameTable({
  boardgames,
  sort,
  order
}: BoardGameTableProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSort = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    const order = params.get('order')
    params.set('sort', sort)

    if (sort == 'title') {
      if (order === 'asc') {
        params.set('order', 'desc')
      } else {
        params.set('order', 'asc')
      }
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <div className='overflow-hidden rounded-t-lg'>
        <table className='w-full bg-slate-50'>
          <thead className='h-11 bg-slate-100'>
            <tr className='w-full'>
              <th className='w-32'></th>
              <th scope='col' className='pl-4'>
                <button
                  onClick={() => handleSort('title')}
                  className='flex font-medium hover:cursor-pointer hover:underline'
                >
                  Title
                  {sort === 'title' && order === 'asc' && (
                    <ArrowDownIcon className='ml-1 w-4' />
                  )}
                  {sort === 'title' && order === 'desc' && (
                    <ArrowUpIcon className='ml-1 w-4' />
                  )}
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {boardgames.length > 0 &&
              boardgames.map((game, index) => (
                <tr
                  key={game._id.toString()}
                  className='border-b-2 first-of-type:rounded-t-xl last-of-type:border-none'
                >
                  <BoardGameTableItem
                    id={game._id.toString()}
                    title={game.title}
                    image={game.image}
                    index={index}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
