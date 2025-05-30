import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'

export default async function Browse() {
  return (
    <div className=''>
      <h1 className='text-4xl font-medium'>Browse Page</h1>
      {/* <hr className='my-8 h-px border-0 bg-black' /> */}

      <BoardGameTable />
    </div>
  )
}
