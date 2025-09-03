'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

import type { BoardGame } from '@/app/lib/definitions'
import BoardGameTableItem from '../BoardGameTableItem/boardgame-table-item'
import { BrowseTableSkeleton } from '../../skeletons'

type BoardGameTableProps = {
  totalPages: number
}

export default function BoardGameTable({ totalPages }: BoardGameTableProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const rawPage = Number(searchParams.get('page'))
  const currentPage = rawPage >= 1 ? rawPage : 1
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

  const [boardgames, setBoardgames] = useState<BoardGame[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGames = useCallback(async () => {
    const res = await fetch(`/api/games?page=${currentPage}`)
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }, [currentPage])

  const fetchGamesAsc = useCallback(async () => {
    const res = await fetch(`/api/titles-asc?page=${currentPage}`)
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }, [currentPage])

  const fetchGamesDesc = useCallback(async () => {
    const res = await fetch(`/api/titles-desc?page=${currentPage}`)
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }, [currentPage])

  const handleSort = (sort: string) => {
    setLoading(true)
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

  // Sorting
  useEffect(() => {
    setLoading(true)
    const sort = searchParams.get('sort')
    const order = searchParams.get('order')
    if (sort === 'title' && order === 'asc') {
      fetchGamesAsc()
    } else if (sort === 'title' && order === 'desc') {
      fetchGamesDesc()
    } else if (!sort && !order) {
      fetchGames()
    }
    // setLoading(false)
  }, [searchParams, fetchGames, fetchGamesAsc, fetchGamesDesc])

  // Redirect if page number is invalid in query params
  useEffect(() => {
    const rawPage = Number(searchParams.get('page'))
    if (!rawPage || rawPage <= 0) {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      router.replace(`?${params.toString()}`)
    } else if (rawPage > totalPages) {
      const params = new URLSearchParams(searchParams)
      params.set('page', totalPages.toString())
      router.replace(`?${params.toString()}`)
    }
  }, [searchParams, router, totalPages])

  return (
    <>
      {loading ? (
        <BrowseTableSkeleton />
      ) : (
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
                boardgames.map(game => (
                  <tr
                    key={game._id}
                    className='border-b-2 first-of-type:rounded-t-xl last-of-type:border-none'
                  >
                    <BoardGameTableItem
                      id={game._id}
                      title={game.title}
                      image={game.image}
                    />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
