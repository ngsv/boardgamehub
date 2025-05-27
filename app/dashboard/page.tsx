// import { useEffect } from 'react'
import { roboto } from '../ui/fonts'
// import { recentlyAddedGames } from '../lib/utils/queries'

export default async function Dashboard() {
  // const recentlyAdded = await recentlyAddedGames()

  return (
    <div>
      <h1 className='text-4xl font-medium'>Explore</h1>

      <div>
        <h2 className='text-xl'>Recently Added</h2>
        {/* <div>{recentlyAdded}</div> */}
      </div>
      <div>
        <h2 className='text-xl'>Staff's Picks</h2>
      </div>
    </div>
  )
}
