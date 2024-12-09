import { React, useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { IoMdContacts } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { FaCoins } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { darkModeBackgroud } from '../../constants/backgroud.js'
import { lightModeBackgroud } from '../../constants/backgroud.js'

// import PillAnimation from "../PillAnimation.jsx";

function Footer() {

  const { mode, setMode } = useContext(DataContext);
  return (
    <div className="flex flex-col justify-evenly items-center px-2 py-2 h-full sm:rounded-t-xl" style={mode === 'dark' ? darkModeBackgroud : lightModeBackgroud}>
      <div className="Detail_Tab flex lg:flex-col sm:flex-row lg:items-center sm:justify-evenly sm:w-9/12 gap-1 text-3xl">
        <span className="p-1 w-12 flex flex-col items-center group">
          <IoMdContacts className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity delay-200 pointer-events-none"> Contact</label>
        </span><span className="p-1 w-12 flex flex-col items-center group">
          <FaFileAlt className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> CV</label>
        </span><span className="p-1 w-12 flex flex-col items-center group">
          <GrTrophy className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Achievements</label>
        </span><span className="p-1 w-12 flex flex-col items-center group">
          <FaCoins className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Income</label>
        </span>
        <span className="p-1 w-12 flex flex-col items-center group">
          <FaMoneyBillTrendUp className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="text-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Investments</label>
        </span>
      </div>

      {/* <div className="pill">
        <PillAnimation />
      </div> */}
    </div>
  );
}

export default Footer;
