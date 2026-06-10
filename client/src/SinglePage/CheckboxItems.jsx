import React from 'react'

export const CheckboxItems = ({ item: { id, checkboxitem, title, sidepara, desc, paraImage_one, paraImage_two } }) => {
  return (

    <div>
      <li><i className="fa-solid fa-circle-check"></i>{checkboxitem}</li>
    </div>
  )
}
