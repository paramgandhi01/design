import React from "react";
// import Navbar from "./Navbar";
import About from "./About";
import Phone from "./Phone";
// import Footer from "./Footer";
import Pics from "./Pics";
import Admin from "./Admin";
import Details from "./Details";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Phone />
      <Pics />
      <Details />
      <Admin />
    </div>
  );
}
