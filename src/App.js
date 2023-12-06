// import logo from './logo.svg';
import './App.css';

// index.js or index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './home-page/home.css';
import Nav from"./component/nav";
import Footer from "./component/footer"; 
import Home from"./home-page/home";

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//   </>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
    <Nav/>
    <Home/>
   
    <Footer/>
    </>
  );
}

