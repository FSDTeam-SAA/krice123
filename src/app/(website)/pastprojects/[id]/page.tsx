/* eslint-disable react-hooks/rules-of-hooks */
import PastProjectDetail from '@/components/pastproject/PastProjectDetail'
import React from 'react'
import PastSingleHero from '@/components/pastproject/pastsingleHero'

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  
  return (
    <div>
        <PastSingleHero />
        <PastProjectDetail projectId={id} />
    </div>
  )
}

export default page