import React from 'react'

const Title = ({text,className}) => {
  return (
    <div>
        <h2 className={`text-[#262626] lg:text-[40px] text-2xl md:text-4xl font-bold ${className}`}>{text}</h2>
    </div>
  )
}

export default Title
