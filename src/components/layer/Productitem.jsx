import React from 'react'
import Listitem from './Listitem'
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Productitem = ({src, alt, className, offer, title, price, category,onClick}) => {
  return (
    <div className={` productitem sm:w-[370px] w-100% group ${className}`}>

        <div className="image w-full h-[370px] bg-slate-300 relative overflow-hidden">
            <img className={`w-full h-full object-cover ${className} `} src={src} alt={alt} />

            <button className={`absolute top-2 left-2 bg-[#262626] text-[#FFFFFF] ${offer ?"px-8":"px-0"} py-2  `}>Discount: {offer}%</button>

            <div className="overlay w-full absolute bg-[#fff] bottom-0 translate-y-[100%] left-0 group-hover:translate-y-[0] transition-all duration-300">

                <ul className='font-DM lg:text-base text-sm font-normal pr-8 '>

                    <li 
                        className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>
                        Add to Wish List
                        <FaHeart className='text-black' />
                    </li>
                    
                    <li 
                        className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>
                        Compare
                        <LuRefreshCcw 
                        className='text-black'  />

                    </li>

                    <li
                     onClick={onClick}
                     className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>
                        Add to Cart
                        <FaShoppingCart className='text-black'  />
                    </li>




                </ul>
            </div>

        </div>

        <div className="text font-DM px-3 lg:px-0">
            <Link to={'/productinside'}>
            <h2 className='flex justify-between text-xl font-bold pt-6 '>
                {title}
                <p className='text-[#767676] text-base font-normal leading-7 '>
                    {price}
                </p>
            </h2>
            </Link>
            <p className='text-[#767676] text-base font-normal leading-7 pt-4'>
            {category}
            </p>

        </div>

    </div>
  )
}

export default Productitem