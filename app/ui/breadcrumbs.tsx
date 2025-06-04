import Link from 'next/link'

import clsx from 'clsx'

type BreadcrumbsProps = {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({
  breadcrumbs
}: {
  breadcrumbs: BreadcrumbsProps[]
}) {
  return (
    <nav className='fornt-medium mb-5 text-3xl'>
      <ol className='flex'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href}>
            <Link
              href={breadcrumb.href}
              className={clsx(
                breadcrumb.active ? 'text-gray-900' : 'text-gray-500'
              )}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && <span className='mx-3'>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
