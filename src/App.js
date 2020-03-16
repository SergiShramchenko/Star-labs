import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import CategoryPage from './pages/category-page/CategoryPage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
