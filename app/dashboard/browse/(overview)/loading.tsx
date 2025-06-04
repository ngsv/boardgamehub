import { BrowseTableSkeleton } from '@/app/ui/skeletons'

export default function Loading() {
  return (
    <div>
      <h1 className='mb-5 text-3xl font-medium'>Browse</h1>
      <BrowseTableSkeleton />
    </div>
  )
}
