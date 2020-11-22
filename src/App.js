import React from 'react';
import Home from './components/home/Home';
import Nav from './components/navbar/Nav';
import About from './components/about/About';
import '../src/styles/main.scss';
import {Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
