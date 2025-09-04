import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search'
}

export default async function Search() {
  return (
    <div>
      <h1 className='text-3xl font-medium'>Search</h1>
    </div>
  )
}
