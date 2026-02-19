import AllFloorPlans from '@/components/floorplans/AllFloorPlans'
import FloorPlansHero from '@/components/floorplans/FloorPlansHero'
import FloorPlan from '@/components/website/home/FloorPlan'
import React from 'react'

const page = () => {
  return (
    <div>
        <FloorPlansHero />
        <AllFloorPlans />
    </div>
  )
}

export default page