
import Login from '@/components/auth/Login'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Login />
        </Suspense>
    </div>
  )
}

export default page