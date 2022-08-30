import React, { Component } from 'react'
import Category from '../components/Category' //importing the categories
import MealsContainer from './MealsContainer'

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

class CategoriesContainer extends Component {
    state = {             // state is a Constructor 
        categories: [],
        category: "" //setting state of category blank
    } 

    componentDidMount (){ // this is activate upon start up to grab the categories
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data.categories) //single key
            this.setState({
                categories: data.categories
        })
        })
    }

    handleOnClick = (e) => {
      console.log(e.target.id)
      this.setState({
          category: e.target.id
      })

    }


  render() {
      let categories = this.state.categories.map((category, i)=> {
          return <Category key={i} category={category.strCategory} pic={category.strCategoryThumb} handleClick={this.handleOnClick}/>
      })
    return (
      <div>
          <h2> The Meal Categories </h2>
          {categories}
          <hr/>
          <h3>The {this.state.category} Meals</h3>
          <MealsContainer category={this.state.category}/>
      </div>
    )
  }
}


export default CategoriesContainer


// this is a view page it is importing data and structure from a component Category.js
// without hooks to give a component local state it has to be written as a class instead of arrow function etc 
// you need to initalize state and maintain it 
// need to review