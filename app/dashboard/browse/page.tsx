import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'

export default async function Browse() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <BoardGameTable />
    </div>
  )
}
