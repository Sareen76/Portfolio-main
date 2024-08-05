import React, {useContext} from "react";
import { DataContext } from "../context/DataProvider.jsx";
import { mainLightModeBackgroud } from "../constants/backgroud.js";
import { mainDarkModeBackgroud } from "../constants/backgroud.js";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Hero from "./Hero.jsx";

function Home(personInfo) {

  const {mode} = useContext(DataContext);


  return (
    <article className="h-full" style={mode === 'dark' ? mainDarkModeBackgroud : mainLightModeBackgroud}>
    <section className="">
      <Hero/>
    </section>

    <section>
      <Project/>
    </section>
    
    <section>
      <Contact/>
    </section>
    <section></section>
    </article>
  );
}

export default Home;
