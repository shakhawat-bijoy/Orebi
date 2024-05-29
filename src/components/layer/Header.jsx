import React from 'react'
import Breadcrumb from './Breadcrumb'

const Header = ({text, className}) => {
  return (
    <div className="header py-4 lg:py-32">
        <h2 className={`text-[#262626] lg:text-[49px] text-2xl font-DM font-bold pb-0 lg:pb-5 ${className} `}>{text}</h2>
        <Breadcrumb/>
    </div>

  )
}

export default Header