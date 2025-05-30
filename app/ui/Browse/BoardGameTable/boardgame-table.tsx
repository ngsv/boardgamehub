'use client'

import { useState, useEffect } from 'react'
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

  console.log(boardgames)

  return (
    <div>
      <div onClick={() => handleSort('title')} className='hover:cursor-pointer'>
        Title
      </div>
      <div className='h-full w-full bg-slate-200'>
        {boardgames?.map(game => (
          <BoardGameTableItem
            key={game._id.toString()}
            title={game.title}
            image={game.image}
          />
        ))}
      </div>
    </div>
  )
}
