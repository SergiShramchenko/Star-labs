import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import CategoryPage from './pages/category-page/CategoryPage';
import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
