import { Suspense } from 'react'
import { Metadata } from 'next'

import { BoardGame } from '@/app/lib/definitions'
import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'
import BrowsePagination from '@/app/ui/Browse/browse-pagination'
import {
  browsePages,
  browseGames,
  browseGamesAscending,
  browseGamesDescending
} from '@/app/lib/queries'
import { BrowseTableSkeleton } from '@/app/ui/skeletons'

export const metadata: Metadata = {
  title: 'Browse'
}

export default async function Browse(props: {
  searchParams?: Promise<{
    page?: string
    sort?: string
    order?: string
  }>
}) {
  const searchParams = await props.searchParams
  const totalPages = (await browsePages()) || 1
  const currentPage = Number(searchParams?.page) || 1
  const sort = searchParams?.sort || ''
  const order = searchParams?.order || ''

  let boardgames: BoardGame[]
  if (sort === 'title' && order === 'asc') {
    boardgames = await browseGamesAscending(currentPage)
  } else if (sort === 'title' && order === 'desc') {
    boardgames = await browseGamesDescending(currentPage)
  } else {
    boardgames = await browseGames(currentPage)
  }

  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <div className='flex h-full flex-col justify-between'>
        <Suspense fallback={<BrowseTableSkeleton />}>
          <BoardGameTable boardgames={boardgames} sort={sort} order={order} />
          <BrowsePagination totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  )
}
