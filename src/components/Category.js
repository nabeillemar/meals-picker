import React from 'react'

const Category = (props) => {
  return (
   <div>
       <button>{props.category}</button>
       <h3> {props.pic}</h3>

   </div>
   
  )
}

export default Category


// The button maker