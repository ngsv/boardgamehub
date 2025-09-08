'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className='relative mt-5'>
      <label htmlFor='search' className='hidden'>
        Search
      </label>
      <input
        id='search'
        className='h-10 w-full rounded border px-3 pl-10 focus:border-black focus:outline-none'
        onChange={e => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      ></input>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='absolute left-3 top-3 size-4'
      >
        <path
          fillRule='evenodd'
          d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  )
}
