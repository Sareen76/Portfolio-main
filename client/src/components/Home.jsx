import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider.jsx";
import { mainLightModeBackgroud } from "../constants/backgroud.js";
import { mainDarkModeBackgroud } from "../constants/backgroud.js";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import Hero from "./Hero.jsx";
import ProgressBar from "./ProgressBar.jsx";
import Techslab from './Techslab.jsx';
import ShowFront from "./ShowFront.jsx";
import LineBreaker from "./LineBreaker/LineBreaker.jsx";


function Home() {

  const { mode } = useContext(DataContext);



  return (
    <article className="h-full w-full" style={mode === 'dark' ? mainDarkModeBackgroud : mainLightModeBackgroud}>
      <section className="">
        <Hero />
      </section>
      
      <section>
        <Techslab />
      </section>
      <LineBreaker/>
      <section>
        <Project />
      </section>

      <section>
        <ProgressBar />
      </section>

      <section>
        <Contact />
      </section>
    </article>

  );
}

export default Home;
