import BoardGameTable from '@/app/ui/Browse/BoardGameTable/boardgame-table'
import BrowsePagination from '@/app/ui/Browse/browse-pagination'
import { browsePages } from '@/app/lib/utils/queries'

export default async function Browse(props: {
  params: Promise<{ page?: string }>
}) {
  const params = await props.params
  // const currentPage = Number(params?.page) || 1
  const totalPages = (await browsePages()) || 1

  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <div className='flex h-full flex-col justify-between'>
        <BoardGameTable />
        <BrowsePagination totalPages={totalPages} />
      </div>
    </div>
  )
}
