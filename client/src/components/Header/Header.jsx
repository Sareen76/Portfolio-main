import { React, useContext, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { DataContext } from "../../context/DataProvider";
import Sun from '../../assets/sun-of-may.gif'
import Moon from '../../assets/night-mode.gif'
import '../../index.css'

import { darkModeBackgroud} from '../../constants/backgroud.js'
import { lightModeBackgroud} from '../../constants/backgroud.js'

const Header = () => {
  const { mode, toggleTheme } = useContext(DataContext);

  return (
    <div className="flex flex-col justify-between px-2 py-2 min-h-full" style={mode === 'dark' ? darkModeBackgroud : lightModeBackgroud}>
      <h1 className="text-3xl font-bold text-center"> LOGO</h1>
      <div className="flex flex-col items-center gap-3 text-3xl">
        <span className="p-1 flex flex-row gap-3 items-center group">
          <FaLinkedin className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Linkedin</label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center group">
          <FaGithub className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> GitHub </label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center group">
          <FaTwitter className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Twitter</label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center group">
          <FaInstagram className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Instagram</label>
        </span>
      </div>

      <div className="darkModeLightMode flex justify-center pb-4">
        <button
          onClick={ toggleTheme }
          className="bg-white text-black font-bold rounded-full h-10 w-10"
        >
          {mode === "dark" ? <img src={Moon} alt="D" className={`h-10 w-10 rounded-full`}/> : <img src={Sun} alt="L" className={`h-10 w-10 rounded-full`}/>}
        </button>
      </div>
    </div>
  );
};

export default Header;
