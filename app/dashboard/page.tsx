import BoardGameList from '../ui/BoardGameList/boardgame-list'

export default async function Dashboard() {
  return (
    <div>
      <h1 className='text-4xl font-medium'>Explore</h1>

      <div>
        <h2 className='text-xl'>Recently Added</h2>
        <BoardGameList />
      </div>
      <div>
        <h2 className='text-xl'>{`Staff's Picks`}</h2>
      </div>
    </div>
  )
}
