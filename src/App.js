import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home'; 
import Services from './Components/pages/Services.js'; 
import Products from './Components/pages/Products.js'; 
import SignUp from './Components/pages/SignUp.js'; 

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/> 
        <Route path='/sign-Up' component={SignUp}/> 
 

      </Switch>
    </Router>

    </> 
  )
}

export default App;
