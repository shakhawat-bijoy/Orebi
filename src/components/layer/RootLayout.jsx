import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Searchbar from '../Searchbar'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <div>

        <Navbar/>
        <Searchbar/>

            <Outlet/>

        <Footer/>

    </div>
  )
}

export default RootLayout