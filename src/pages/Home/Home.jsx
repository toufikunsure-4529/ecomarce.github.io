import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import myContext from '../../context/data/myContext'

function Home() {
  const context=useContext(myContext)
 

   
  return (
    <Layout>
      <HeroSection />
    </Layout>
  )
}

export default Home
