import SideNav from '../ui/dashboard/sidenav'

import { roboto } from '../ui/fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex h-full flex-col md:flex-row'>
      <div className='fixed h-full w-full md:w-64'>
        <SideNav />
      </div>
      <div
        className={`${roboto.className} fixed bottom-6 top-44 w-full overflow-y-scroll px-4 md:bottom-4 md:left-64 md:right-0 md:top-4 md:w-auto`}
      >
        {children}
      </div>
    </div>
  )
}
