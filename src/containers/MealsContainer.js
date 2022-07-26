import React, { Component } from 'react'
import Meal from '../components/Meal'

class MealsContainer extends Component {
    state = {
        meals: [],
        category: ""

    }

    componentDidUpdate(prevState) { //this checks for previous state of something you are tracking //want todo it on change not mount
        if (prevState.category !== this.props.category){
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                console.log(data.meals)
                this.setState({
                    meals: data.meals, // updating state using this 
                    category: this.props.category //updating state using this //do we need this?
                })
            })
        }
    }

  render() {
    const meals = this.state.meals.map((meal, i) => {
        return <Meal key={i} meal={meal.strMeal} />
    })

    return (
      <div>
        {this.props.category !== "" ? meals : <h3> Please select a Category</h3>}
      </div>
    )
  }
}

export default MealsContainer







// this is like an index