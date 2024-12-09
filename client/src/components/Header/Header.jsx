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
    <div className="flex lg:flex-col justify-between sm:items-center sm:rounded-b-2xl px-2 py-2 h-full" style={mode === 'dark' ? darkModeBackgroud : lightModeBackgroud}>
      <h1 className="text-3xl font-bold text-center"> LOGO</h1>
      <div className="flex lg:flex-col sm:flex-row items-center gap-3 text-3xl">
        <span className="p-1 flex flex-row gap-3 items-center sm:flex-col group">
          <FaLinkedin className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 sm:hidden group-hover:opacity-100 transition-opacity pointer-events-none"> Linkedin</label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center sm:flex-col group">
          <FaGithub className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 sm:hidden group-hover:opacity-100 transition-opacity pointer-events-none"> GitHub </label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center sm:flex-col group">
          <FaTwitter className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 sm:hidden group-hover:opacity-100 transition-opacity pointer-events-none"> Twitter</label>
        </span>
        <span className="p-1 flex flex-row gap-3 items-center sm:flex-col group">
          <FaInstagram className="hover:scale-125 transition-transform duration-300" />
          <label htmlFor="@" className="mb-1 absolute ml-10 font-medium text-2xl opacity-0 sm:hidden group-hover:opacity-100 transition-opacity pointer-events-none"> Instagram</label>
        </span>
      </div>

      <div className="darkModeLightMode flex justify-center pb-4">
        <button
          onClick={ toggleTheme }
          className="bg-white text-black font-bold rounded-full h-10 w-10"
        >
          {mode === "dark" ? <img src={Moon} alt="D" title="current mode : dark" className={`h-10 w-10 rounded-full`}/> : <img src={Sun} alt="L" title="current mode : light" className={`h-10 w-10 rounded-full`}/>}
        </button>
      </div>
    </div>
  );
};

export default Header;
