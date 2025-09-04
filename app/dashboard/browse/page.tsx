import { Suspense } from 'react'
import { Metadata } from 'next'

import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'
import BrowsePagination from '@/app/ui/Browse/browse-pagination'
import { browsePages } from '@/app/lib/utils/queries'

export const metadata: Metadata = {
  title: 'Browse'
}

export default async function Browse() {
  const totalPages = (await browsePages()) || 1

  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <div className='flex h-full flex-col justify-between'>
        <Suspense fallback={<div>Loading...</div>}>
          <BoardGameTable totalPages={totalPages} />
          <BrowsePagination totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  )
}
