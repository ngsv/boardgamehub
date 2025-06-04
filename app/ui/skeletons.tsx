export function BrowseTableRowSkeleton() {
  return (
    <tr className='border-b-2 last-of-type:border-none'>
      <td className='h-32 w-32'>
        <div className='my-4 h-full w-full rounded bg-gray-100'></div>
      </td>
      <td className='pl-4'>
        <div className='h-6 w-72 rounded bg-gray-100'></div>
      </td>
    </tr>
  )
}

export function BrowseTableSkeleton() {
  return (
    <div className='overflow-hidden rounded-t-lg'>
      <table className='w-full'>
        <thead className='h-11 bg-slate-50'>
          <tr className='w-full'>
            <th></th>
            <th scope='col' className='pl-4 text-start font-medium'>
              Title
            </th>
          </tr>
        </thead>

        <tbody>
          <BrowseTableRowSkeleton />
          <BrowseTableRowSkeleton />
          <BrowseTableRowSkeleton />
          <BrowseTableRowSkeleton />
          <BrowseTableRowSkeleton />
          <BrowseTableRowSkeleton />
        </tbody>
      </table>
    </div>
  )
}
