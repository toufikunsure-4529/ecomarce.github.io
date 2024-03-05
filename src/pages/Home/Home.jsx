import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import myContext from '../../context/data/myContext'

function Home() {
  const context=useContext(myContext)
  console.log(context.state)

  const {name}=context.state
  const {color}=context
   
  return (
    <Layout>Name : {name} color : {color}</Layout>
  )
}

export default Home
