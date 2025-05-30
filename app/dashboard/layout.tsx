import SideNav from '../ui/dashboard/sidenav'

import { roboto } from '../ui/fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full md:w-64'>
        <SideNav />
      </div>
      <div className={`${roboto.className} h-full w-full p-6`}>{children}</div>
    </div>
  )
}
