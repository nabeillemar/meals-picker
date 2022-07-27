import React from 'react'; 
import CategoriesContainer from './containers/CategoriesContainer' 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/categories' component={CategoriesContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// this is rending the categoriesContainer page (which is the a view)