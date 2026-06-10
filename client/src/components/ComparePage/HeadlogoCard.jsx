import React from 'react'

export const HeadlogoCard = ({ item: { id,  headlogo} }) => {
  return (
    <div className='approved-card'> 
        <img src={headlogo} className="img-fluid" alt="" />
    </div>
  )
}
