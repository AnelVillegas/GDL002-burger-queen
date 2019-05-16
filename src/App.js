import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import  Kitchen from './components/Kitchen';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Route exact path="/"component={Home}/> 
      <Route path="/Breakfast" component={Breakfast} />
     </div>
     <Button/>
     <Button/>
    
    </BrowserRouter>
  );
}

export default App;
