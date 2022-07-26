import React, { Component } from 'react'
import Meal from '../components/Meal'

class MealsContainer extends Component {
    state = {
        meals: [],
        category: ""

    }

    componentDidUpdate(prevState) { //this checks for previous state of something you are tracking 
        if (prevState.category !== this.props.category){
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                console.log(data.meals)
            })
        }
    }

  render() {
    const meals = this.state.meals.map((meal, i) => {
        return <Meal key={i} meal={meal.strMeal} />
    })

    return (
      <div>
        <h3>I am a meals container </h3>
        {meals}
      </div>
    )
  }
}

export default MealsContainer







// this is like an index