import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import ShopItem from './components/ShopItem';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/about' component={About} />

          <Route path='/shop' exact component={Shop} />
          
          <Route path='/shop/:id' component={ShopItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
