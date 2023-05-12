'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/sidebar/sidebar'


const UserLayout = ({ children }: any) => {
  const router = useRouter()
  return (
      <div className="grid grid-cols-12 items-start gap-6 pb-16">
        <div className="col-span-3 lg:left-0">
          <Sidebar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
  )
}

export default UserLayout
