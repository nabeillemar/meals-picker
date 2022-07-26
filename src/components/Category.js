import React from 'react'

const Category = (props) => {
  return (
   <div>
       <button onClick={props.handleClick} id={props.category}>{props.category}</button>
       <h3> {props.pic}</h3>

   </div>
   
  )
}

export default Category


// The button maker
// presentational component 