// view a list of meals with the given ingrident 
import React, { Component } from 'react'
import MealsContainer from "./MealsContainer"

class IngredientsContainer extends Component {
  render() {
    return (
      <div>
        <h2> The Meals with {this.props.match.params.id.split("_").join(" ")}</h2>
        <MealsContainer searchTerm={this.props.match.params.id.split("_").join(" ")} searchType="i" banner="" history={this.props} />
        {console.log(this.props.match.id)}
      </div>
    )
  }
}

export default IngredientsContainer
