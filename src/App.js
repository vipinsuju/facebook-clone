import logo from './logo.svg';
import './App.css';
import Inputfield from './Components/UI/Inputfield';
//import Card from './Components/UI/Card';
import Login from './Components/Screens/Login/Login';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Register from "./Components/Screens/Register/Register"

function App() {
  return (
    <div className="App">
       <Router>
      
      <Switch>
        <Route path = "/" exact component = {Login} />
        <Route path = "/login" component = {Login} />
        <Route path ="/register" component = {Register}/>

        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
