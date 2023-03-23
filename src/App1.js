import logo from './logo.svg';
import './App.css';
import { Compo1 } from './Components/Compo1';
import { Compo2 } from './Components/Compo2';
import { Compo3 } from './Components/Compo3';


function App1() {
    const head = "Register here..."
    const btn = "submit"
  return (
    <div className="App">
    <Compo1 heading = {head}/>
    <Compo2/>
    <Compo3 button = {btn}/>

    </div>    
   
  );
}

export default App1;
