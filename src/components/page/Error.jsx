import React from 'react'
import Container from '../layer/Container'
import Button from '../layer/Button'
import { FaSearch } from 'react-icons/fa'
import Navbar from '../Navbar'
import Searchbar from '../Searchbar'
import Footer from '../Footer'

const Error = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
        <Container className="px-3 lg:px-0">
            <div className='lg:w-[400px] lg:h-[260px] w-[300px] h-[160px]'>
                <p className='text-[#262626] lg:text-[200px] text-[100px] font-bold lg:mb-10'>404</p>
            </div>

            <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 leading-5'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

            <div className='lg:my-14 my-7 relative lg:w-[643px] '>
            <input type="text" placeholder='Type to search' className='lg:w-[643px] w-full lg:py-4 py-1 px-5 bg-white outline-none border border-[#F0F0F0] relative' />
            <FaSearch className='absolute right-1 lg:right-5 top-1/2 translate-y-[-50%]' />
            </div>

            <Button to="/" className="lg:py-4 py-2 lg:px-[53px] px-5" text="Back to Home"/>
        </Container>
        <Footer/>
    </div>
  )
}

export default Error