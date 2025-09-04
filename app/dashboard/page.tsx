import { Metadata } from 'next'

import BoardGameList from '../ui/Explore/BoardGameList/boardgame-list'

export const metadata: Metadata = {
  title: 'Explore'
}

export default async function Dashboard() {
  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Explore</h1>

      <div className='rounded-xl bg-slate-50 p-2'>
        <h2 className='p-2 text-xl font-medium'>{`Staff's Picks`}</h2>
        <BoardGameList list='staff' />
      </div>

      <div className='mt-4 rounded-xl bg-slate-50 p-2'>
        <h2 className='p-2 text-xl font-medium'>Recently Added</h2>
        <BoardGameList list='recent' />
      </div>
    </div>
  )
}
