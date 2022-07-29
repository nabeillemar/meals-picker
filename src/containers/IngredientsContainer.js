// view a list of meals with the given ingrident 

import React, { Component } from 'react'
import MealsContainer from "./MealsContainer"

class IngredientsContainer extends Component {
  render() {
    return (
      <div>
        <h2> The Meals with {this.props.match.params.id}</h2>
      </div>
    )
  }
}

export default IngredientsContainer
