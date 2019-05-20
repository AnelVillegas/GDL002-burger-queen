import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Button from './components/ButtonHome';
import Home from './components/Home';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import  Kitchen from './components/Kitchen';
import Navbar from './components/Navbar';


class App extends Component {
  render () {
  return (
    <BrowserRouter>
     <div className="App">
       
      <Navbar title= "ORDENES" />
      <Route exact path="/"component={Home}/> 
      <Route exact path="/Breakfast" render={() => <Breakfast title="Desayunos"/> } />
      <Route exact path="/Lunch" render={() => <Lunch title="Comida / Cena"/>} />
      <Route exact path="/Kitchen" render={() => <Kitchen title="Ordenes"/> } />
      <Route exact path="/"component={Button}/>
   
      
     </div>
     
    
    </BrowserRouter>
  );
 }
}

export default App;
