// import logo from './logo.svg';
import './App.css';
// import "animate.css";



// import Navbar from "./Components/Navbar/Navbar"
// import Landpage from "./Components/Landpage/Landpage"
// import Product from "./Components/Product/Product"
// import Light from "./Components/Light/Light"
// import Readymade from "./Components/Readymade/Readymade"
// import About from "./Components/About/About"
// import Contact from "./Components/Contact/Contact"
// import Footer from './Components/Footer/Footer';



// import Parentcomp from './Props/Parentcomp';
// import Condrendering from './Condrendering/Condrendering';
// import Task1 from './Task1';
// import Listrendering from './Listrendering/Listrendering';


// function App() {
  
//     return (
//       <div className="App">
//         <Navbar/>
//         <Landpage/>
//         <Product/>
//         <Light/>
//         <Readymade/>
//         <About/>
//         <Contact/>
//         <Footer/>

//         <Parentcomp/>
//         <Condrendering yeslogged={true} notlogged={false}/>
//         <Task1/>
//         <Listrendering/>
//       </div>
//     );
//   }


import React from 'react'
// import Navbar1 from './Reactbootstrap/Navbar/Navbar';
// import Carousel1 from './Reactbootstrap/Carousel/Carousel';
// import Card1 from './Reactbootstrap/Card/Card';
// import Table1 from './Reactbootstrap/Table/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   return (
//     <>
//       <Navbar1></Navbar1>
//       <Carousel1/>
//       <Card1/>
//       <Table1/>
//     </>
//   )
// }
import Childcomp from './Classcomp/Childcomp';

// class App extends React.Component{
//   render(){
//    const name="vamsi";
//     const place="Hyd";
//     const details=[{
//       id:1,name:"raju",job:"trainer"
//     },{id:2,name:"ravi",job:"instructor"}]
//     return (
//         <div>
//             {name}
//             {place}
//           <h1>This h tag</h1>
//           <p>This is p tag</p>

//           {details.map(item=>{
//             return(
//               <Childcomp t_name={item.name} job={item.job}/>
//             )
//           })}
//         </div>
//     )
//   }
// }

import Incdec from './Classcomp/inc&dec';
import Loginshow from './Classcomp/loginshow';
// class App extends React.Component{
  
//   render(){
//   return (
//         <div>
//           {/* <Incdec/>   */}
//           <Loginshow/>

//         </div>
//     )
//   }
// }

import ListrnderusingClass from './ListrnderusingClass/ListrnderusingClass';
class App extends React.Component{
  
    render(){
    return (
          <div>
            <Incdec/>  
        <Loginshow/>
            <ListrnderusingClass/>
          </div>
      )
    }
  }





export default App;
