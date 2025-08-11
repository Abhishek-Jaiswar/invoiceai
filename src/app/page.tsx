
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href={'/dashboard'}>
      Welcome
      </Link>
    </div>
  )
}

export default page