import React from 'react'
import Banner from '../../components/Banner'
import Catagorys from './Catagorys'
import SpecialDishes from './SpecialDeshes'
import Testimovials from './Testimovials'
import OurServices from './OurPages'



const Home = () => {
  return (
    <div>
      <Banner/>
      <Catagorys/>
      <SpecialDishes/>
      <Testimovials/>
      <OurServices/>
    </div>
  )
}

export default Home