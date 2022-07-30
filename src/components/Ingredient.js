import React from 'react'
import {Link} from 'react-router-dom'

const Ingredient = (props) => {
  return (
    <div>
        <Link to={`/ingreidents/${props.ingredient.split(" ").join("_")}`}>
          
          </Link>
    </div>
  )
}

export default Ingredient
