import React, { Component } from 'react'
import Category from '../components/Category' //importing the categories

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

class CategoriesContainer extends Component {
    state = {             // state is a constrcutor 
        categories: []
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


  render() {
      let categories = this.state.categories.map((category, i)=> {
          return <Category key={i} category={category.strCategory} pic={category.strCategoryThumb}/>
      })
    return (
      <div>
          <h2> The Meal Categories </h2>
          {categories}
      </div>
    )
  }
}


export default CategoriesContainer


// this is a view page it is importing data and structure from a component Category.js