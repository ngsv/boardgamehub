import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'

export default async function Browse() {
  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <BoardGameTable />
    </div>
  )
}
