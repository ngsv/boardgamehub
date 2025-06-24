'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { generatePagination } from '@/app/lib/utils/pagination'

type BrowsePaginationProps = {
  totalPages: number
}

export default function BrowsePagination({
  totalPages
}: BrowsePaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const pages = generatePagination(currentPage, totalPages)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className='mt-4 flex h-10 w-auto justify-center'>
      <PaginationArrow
        href={createPageURL(currentPage - 1)}
        direction='left'
        isDisabled={currentPage <= 1}
      />

      <div className='flex -space-x-px'>
        {pages.map((page, index) => {
          let position: 'first' | 'last' | 'middle' | 'single' | undefined

          if (index === 0) position = 'first'
          if (index === pages.length - 1) position = 'last'
          if (pages.length === 1) position = 'single'
          if (page === '...') position = 'middle'

          return (
            <PaginationNumber
              key={page}
              page={page}
              href={createPageURL(page)}
              isActive={currentPage === page}
              position={position}
            />
          )
        })}
      </div>

      <PaginationArrow
        href={createPageURL(currentPage - 1)}
        direction='right'
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
}

// Styling for pagination arrows
function PaginationArrow({
  href,
  direction,
  isDisabled
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) {
  const className = clsx(
    'flex rounded border border-gray-300 p-2 w-10 items-center justify-center',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-200': !isDisabled,
      'mr-2': direction === 'left',
      'ml-2': direction === 'right'
    }
  )

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className='w-4' />
    ) : (
      <ArrowRightIcon className='w-4' />
    )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}

// Styling for pagination numbers
function PaginationNumber({
  page,
  href,
  isActive,
  position
}: {
  page: number | string
  href: string
  isActive: boolean
  position?: 'first' | 'last' | 'middle' | 'single'
}) {
  const className = clsx(
    'flex items-center justify-center border border-gray-300 p-1 text-sm w-10',
    {
      'rounded-l': position === 'first' || position === 'single',
      'rounded-r': position === 'last' || position === 'single',
      'bg-primary border-bg-primary text-white': isActive
    }
  )

  return isActive ? (
    <div className={className}>{page}</div>
  ) : (
    <Link className={className} href={href}>
      {page}
    </Link>
  )
}
