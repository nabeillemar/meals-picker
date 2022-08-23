// view a list of meals with the given ingrident 

import React, { Component } from 'react'
import Ingredient from '../components/Ingredient'

let URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

class IngredientsContainer extends Component {
    state={
        ingredients: [],
        ingredient: ""
    }

    componentDidMount (){ // this is activate upon start up to grab the categories
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals) //single key
            this.setState({
                ingredients: data.ingredients
        })
        })
    }

    handleOnClick = (e) => {
      console.log(e.target.id)
      this.setState({
        ingredients: e.target.id
      })

    }

  render() {

    let ingredients = this.state.ingredients.map((ingredient, i)=> {
        return <ingredient key={i} name={ingredient.strIngredient} handleClick={this.handleOnClick}/>
    })
  return (
    <div>
        <h2> The Meal Categories </h2>
        {ingredients}
        <hr/>
    </div>
  )
}

}

export default IngredientsContainer