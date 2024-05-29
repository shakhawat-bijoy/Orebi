import React from 'react'
import Container from '../layer/Container'
import Header from '../layer/Header'
import Listitem from '../layer/Listitem'
import { Link } from 'react-router-dom'

const Myaccount = () => {
  return (
    <div>
        <Container className="font-DM px-3 lg:px-0">
            <Header text="My Account"/>

            <div className='flex'>

                <ul className='w-[234px] h-[406px] flex flex-col gap-y-5'>
                    <li className='pb-5 border-b border-[#F0F0F0] text-base font-bold leading-7 text-[#262626]'>
                        <Link>Dashboard</Link>
                    </li>
                    <li className='pb-5 border-b border-[#F0F0F0] text-[#262626] text-base leading-7 font-normal'>
                        <Link>Others</Link>
                    </li>
                    <li className='pb-5 border-b border-[#F0F0F0] text-[#262626] text-base leading-7 font-normal'>
                        <Link>Donwloads</Link>
                    </li>
                    <li className='pb-5 border-b border-[#F0F0F0] text-[#262626] text-base leading-7 font-normal'>
                        <Link>Addresses</Link>
                    </li>
                    <li className='pb-5 border-b border-[#F0F0F0] text-[#262626] text-base leading-7 font-normal'>
                        <Link>Account details</Link>
                    </li>
                    <li className='pb-5 border-b border-[#F0F0F0] text-[#262626] text-base leading-7 font-normal'>
                        <Link>Logout</Link>
                    </li>


                </ul>


                <div className='w-[918px] h-[126px] ml-10'>
                    <h5 className='mb-9'>
                        <span className='text-[#767676] text-base font-normal leading-7'>Hello </span>
                        <span className='text-[#262626] text-base font-normal leading-7'>admin </span>
                        <span className='text-[#767676] text-base font-normal leading-7'>(not </span>
                        <span className='text-[#262626] text-base font-normal leading-7'>admin</span>
                        <span className='text-[#767676] text-base font-normal leading-7'>? </span>
                        <span className='text-[#262626] text-base font-normal leading-7'>Log out</span>
                        <span className='text-[#767676] text-base font-normal leading-7'>)</span>
                        
                    </h5>
                    <p><span className='text-[#767676] text-base font-normal leading-7'>From your account dashboard you can view your </span> 
                        <span className='text-[#262626] text-base font-normal leading-7'>recent orders, </span>
                        <span className='text-[#767676] text-base font-normal leading-7'>manage your </span>
                        <span className='text-[#262626] text-base font-normal leading-7'>shipping and billing addresses, </span>
                        <span className='text-[#767676] text-base font-normal leading-7'>and </span>
                        <span className='text-[#262626] text-base font-normal leading-7'>edit your password and account details.</span>
                    </p>
                </div>


            </div>
            


               




        </Container>
    </div>
  )
}

export default Myaccount