import React, {useContext} from "react";
import Hero from "../assets/hero-img.png";
import { DataContext } from "../context/DataProvider.jsx";
import { mainLightModeBackgroud } from "../constants/backgroud.js";
import { mainDarkModeBackgroud } from "../constants/backgroud.js";
import Project from "./Project.jsx";
function Home() {

  const {mode} = useContext(DataContext);

  return (
    <article className="h-full" style={mode === 'dark' ? mainDarkModeBackgroud : mainLightModeBackgroud}>
    <section className="">
      <div className="container w-full flex flex-row flex-wrap-reverse  min-h-screen lg:items-center">
        <div className="banner lg:w-1/2 sm:w-full p-4">
          <div className="heading text-center flex flex-col gap-1 mb-3">
            <h3 className="text-3xl">Hi! I'm</h3>
            <h1 className="text-5xl font-bold ">Sareen Garnaik</h1>
            <h2 className="text-3xl font-medium">Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              veritatis exercitationem nihil sequi non quis nam recusandae
              vitae, eligendi doloremque dignissimos? Praesentium, amet quo
            </p>
          </div>
          <div className="resume w-full flex justify-center">
            <button
              className="bg-white text-black font-bold rounded-full px-4 py-3 hover:scale-105 transition-all ease-in-out"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              Resume
            </button>
          </div>

        </div>
        <div className="hero flex lg:w-1/2  sm:w-full sm:justify-center p-3 mb-4">
          <img
            src={Hero}
            alt="Sareen Garnaik"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>

    <section>
      <Project/>
    </section>
    
    <section></section>
    <section></section>
    </article>
  );
}

export default Home;
