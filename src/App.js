// import logo from './logo.svg';
import './App.css';
import "animate.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// import Navbar from "./Components/Navbar/Navbar"
// import Landpage from "./Components/Landpage/Landpage"
// import Product from "./Components/Product/Product"
// import Light from "./Components/Light/Light"
// import Readymade from "./Components/Readymade/Readymade"
// import About from "./Components/About/About"
// import Contact from "./Components/Contact/Contact"



import Parentcomp from './Props/Parentcomp';
import Condrendering from './Condrendering/Condrendering';


function App() {
    return (
      <div className="App">
        {/* <Navbar/>
        <Landpage/>
        <Product/>
        <Light/>
        <Readymade/>
        <About/>
        <Contact/> */}
        <Parentcomp/>
        {/* <Condrendering islogged={false}/> */}
      </div>
    );
  }













export default App;
