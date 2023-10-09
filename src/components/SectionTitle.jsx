import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center py-12 text-4xl  w-[570px] mx-auto'>
      <p className='text-orange-600'>{heading}</p>
      <h3 className='text-red-950 border-y-4 py-2'>{subHeading}</h3>
    </div>
  )
}

export default SectionTitle