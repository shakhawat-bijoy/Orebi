import React from 'react'

const FromError = ({error}) => {
  return (
    <div>
        <p className='absolute top-full text-sm bg-[#ff0000] text-white rounded-md px-2'>{error}</p>

    </div>
  )
}

export default FromError