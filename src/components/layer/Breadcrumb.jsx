import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = () => {
  return (
    <p className='flex items-center text-[#767676] text-xs font-normal capitalize'>Home <FaAngleRight className='text-xxl mt-1'/> <span>{window.location.pathname.split("/")[1]}</span> </p>
  )
}

export default Breadcrumb