import React from 'react'
import Header from '../components/Header'
import SpecialtiyMenu from '../components/SpecialtiyMenu'
import TopDoctors from '../components/TopDoctors'
import Baner from '../components/Baner'

 const Home = () => {
  return (
    <div> 
      <Header/>
      <SpecialtiyMenu/>
      <TopDoctors/>
      <Baner/>
    </div>
  )
}
export default Home