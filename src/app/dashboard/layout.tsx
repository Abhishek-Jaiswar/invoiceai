import React from 'react'
import Preview from './preview/page'
import { ControlSidebar } from '../_components/Controls/ControlSidebar'
import { BookTemplate, Navigation, ScanEye, ToolCase } from 'lucide-react'
import Link from 'next/link'
import { IControl } from '@/lib/types'

const controls: IControl[] = [
  { id: 1, name: "Discover", icon: Navigation, path: "/dashboard/discover" },
  { id: 2, name: "Template", icon: BookTemplate, path: "/dashboard/templates" },
  { id: 3, name: "Assets", icon: ToolCase, path: "/dashboard/assets" },
  {
    id: 4, name: "Preview", icon: ScanEye, path: "/dashboard/preview"
  }
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative h-screen flex'>
      {/* Desktop Sidebar */}
      <section className='hidden md:block border-r border-r-neutral-300'>
        <ControlSidebar controls={controls.filter(item => item.name.toLowerCase() !== 'preview')} />
      </section>

      {/* Main content */}
      <section className='flex-1 p-4 border-r '>
        {children}
      </section>

      {/* Desktop Preview */}
      <section className='hidden md:block w-[40rem]'>
        <Preview />
      </section>

      {/* Mobile Bottom Nav */}
      <section className='md:hidden fixed bottom-0 left-0 w-full'>
        <ControlBottomNav controls={controls} />
      </section>
    </main>
  )
}


const ControlBottomNav = ({ controls }: { controls: IControl[] }) => {
  return (
    <div className='bg-white flex justify-around py-2 shadow-md'>
      {controls.map(control => {
        const Icon = control.icon
        return (
          <Link key={control.id} href={control.path} className="flex flex-col items-center text-gray-600 hover:text-black">
            <Icon size={24} />
            <span className="text-xs">{control.name}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default Layout
