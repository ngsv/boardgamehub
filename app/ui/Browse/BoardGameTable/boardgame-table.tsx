'use client'

import { useState, useEffect } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
import BoardGameTableItem from '../BoardGameTableItem/boardgame-table-item'
import type { BoardGame } from '@/app/lib/definitions'

export default function BoardGameTable() {
  const [boardgames, setBoardgames] = useState<BoardGame[]>([])
  const [sortBy, setSortBy] = useState('initial')

  const initialFetch = async () => {
    const res = await fetch('/api/games')
    const data = await res.json()
    setBoardgames(data)
  }

  const fetchGamesAsc = async () => {
    const res = await fetch('/api/titles-asc')
    const data = await res.json()
    setBoardgames(data)
  }

  const fetchGamesDesc = async () => {
    const res = await fetch('/api/titles-desc')
    const data = await res.json()
    setBoardgames(data)
  }

  const handleSort = (sort: string) => {
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
    <div className=''>
      <table className='w-full table-auto rounded-lg bg-slate-50'>
        <thead className='h-9'>
          <tr className='w-full'>
            <th></th>
            <th className='pl-4'>
              <button
                onClick={() => handleSort('title')}
                className='flex font-medium hover:cursor-pointer'
              >
                Title
                {sortBy == 'title-asc' && (
                  <ArrowDownIcon className='ml-1 w-4' />
                )}
                {sortBy == 'title-desc' && <ArrowUpIcon className='ml-1 w-4' />}
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {boardgames.length > 0 &&
            boardgames?.map(game => (
              <tr key={game._id}>
                <BoardGameTableItem title={game.title} image={game.image} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
