import Home from './mycomponents/Home';
import React from 'react';
import Navbar from "./mycomponents/Navbar";
import About from "./mycomponents/About";
import Phone from "./mycomponents/Phone";
import Footer from "./mycomponents/Footer";
import Pics from "./mycomponents/Pics";
import Admin from "./mycomponents/Admin";
import Details from "./mycomponents/Details";
import Header from "./mycomponents/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" exact element={<About/>} />
      </Routes>
      <Routes>
        <Route path="/phone" exact element={<Phone/>} />
      </Routes>
    <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
