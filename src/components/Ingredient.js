import React from 'react'
import {Link} from 'react-router-dom'

const Ingredient = (props) => {
  return (
    <div>
        <Link to={`/ingredients/${props.ingredient.split(" ").join("_")}`}> 
        <button>{props.ingredient}</button>
          </Link>
    </div>
  )
}

export default Ingredient
// We are splitting the name of the ingredient and adding the "-" here 
// chicken break would be chicken_breast