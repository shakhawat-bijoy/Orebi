import React from 'react'
import Banner from '../Banner'
import Bannerbottom from '../Bannerbottom'
import Sale from '../Sale'
import Award from '../Award'
import Arrivals from '../Arrivals'
import Bestsellers from '../Bestsellers'
import Specialoffers from '../Specialoffers'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Bannerbottom/>
      <Sale/>
      <Arrivals/>
      <Bestsellers/>
      <Award/>
      <Specialoffers/>
    </div>
  )
}

export default Home