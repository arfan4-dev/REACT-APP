import logo from "./logo.svg";
import "./App.css";
 import './Components/Footer.css'
import {Header} from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";

function App() { 
  return (
    <>
      <Header title="Hi Header!!"/> 
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
