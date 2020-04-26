import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Nav from './components/Nav'
import Test from './components/Test'

function App() {
  return (
    <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/contact' component={Contact} /> 
             <Route path='/about' component={About}/>  
             <Route path='/post/:postId' component={Test} />
          </Switch>   
        </div>    
    </BrowserRouter>
  );
}

export default App;
