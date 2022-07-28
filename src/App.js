import React from 'react'; 
import CategoriesContainer from './containers/CategoriesContainer' 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation';
import IngredientsContainer from './containers/IngredientsContainer';
import IngredientsList from './containers/IngredientsList';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/categories' component={CategoriesContainer} />
          <Route exact path='/ingredients' component={IngredientsContainer} />
          <Route exact path='/ingredients/:id' component={IngredientsList} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// this is rending the categoriesContainer page (which is the a view)