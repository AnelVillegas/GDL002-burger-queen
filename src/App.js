import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Button from './components/ButtonHome';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import  Kitchen from './components/Kitchen';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Route exact path="/"component={Home}/> 
      <Route exact path="/Breakfast" component={Breakfast} />
      <Route exact path="/Lunch" component={Lunch} />
      <Route exact path="/Kitchen" component={Kitchen} />
      <Route exact path="/"component={Button}/>
   
      
     </div>
     
    
    </BrowserRouter>
  );
}

export default App;
