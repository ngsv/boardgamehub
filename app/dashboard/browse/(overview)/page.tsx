import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'

export const dynamic = 'force-dynamic' // Forces Next.js to show `loading.tsx`

export default async function Browse() {
  await new Promise(resolve => setTimeout(resolve, 1000)) // simulate delay

  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <BoardGameTable />
    </div>
  )
}
