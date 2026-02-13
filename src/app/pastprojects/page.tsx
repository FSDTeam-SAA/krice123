import PastAllProject from '@/components/pastproject/PastAllProject'
import PastProjectHero from '@/components/pastproject/PastProjectHero'
import Contact from '@/components/shared/Contact'
import React from 'react'

const page = () => {
  return (
    <div>
      <PastProjectHero />
      <PastAllProject />
      <Contact />
    </div>
  )
}

export default page