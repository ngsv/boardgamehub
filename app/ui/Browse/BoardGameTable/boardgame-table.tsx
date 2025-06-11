'use client'

import { useState, useEffect } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

import type { BoardGame } from '@/app/lib/definitions'
import BoardGameTableItem from '../BoardGameTableItem/boardgame-table-item'
import { BrowseTableSkeleton } from '../../skeletons'

export default function BoardGameTable() {
  const [boardgames, setBoardgames] = useState<BoardGame[]>([])
  const [sortBy, setSortBy] = useState('initial')
  const [loading, setLoading] = useState(true)

  const initialFetch = async () => {
    const res = await fetch('/api/games')
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }

  const fetchGamesAsc = async () => {
    const res = await fetch('/api/titles-asc')
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }

  const fetchGamesDesc = async () => {
    const res = await fetch('/api/titles-desc')
    const data = await res.json()
    setBoardgames(data)
    setLoading(false)
  }

  const handleSort = (sort: string) => {
    setLoading(true)

    if (sort == 'title') {
      if (sortBy == 'title-asc') {
        setSortBy('title-desc')
        fetchGamesDesc()
      } else {
        setSortBy('title-asc')
        fetchGamesAsc()
      }
    }
  }

  useEffect(() => {
    initialFetch()
  }, [])

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
                    {sortBy == 'title-asc' && (
                      <ArrowDownIcon className='ml-1 w-4' />
                    )}
                    {sortBy == 'title-desc' && (
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
