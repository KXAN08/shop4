import ContactForm from '@/components/contact/ContactForm.js'
import ContactHero from '@/components/contact/ContactHero'
import FeatureCard from '@/components/shop/FeatureCard'
import React from 'react'

function Contact() {
  return (
    <div>
        <ContactHero/>
        <ContactForm/>
         <FeatureCard />
    </div>
  )
}

export default  React.memo(Contact);
