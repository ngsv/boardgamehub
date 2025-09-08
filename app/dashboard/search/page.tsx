import { Suspense } from 'react'

import SearchBar from '@/app/ui/Search/search'
import SearchTable from '@/app/ui/Search/search-table'

import { searchAllGames } from '@/app/lib/utils/queries'

export default async function Search() {
  const games = await searchAllGames()

  return (
    <div>
      <h1 className='text-3xl font-medium'>Search</h1>
      <SearchBar />

      <Suspense>
        <SearchTable games={games} />
      </Suspense>
    </div>
  )
}
