import ContactForm from '@/components/website/contact/ContactForm'
import ContactHero from '@/components/website/contact/ContactHero'
import ProjectIncluded from '@/components/website/contact/ProjectIncluded'
import { Contact } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactHero />
        <ContactForm />
        <ProjectIncluded />
    </div>
  )
}

export default page