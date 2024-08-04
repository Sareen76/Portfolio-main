import { React, useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { IoMdContacts } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { FaCoins } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { darkModeBackgroud } from '../../constants/backgroud.js'
import { lightModeBackgroud } from '../../constants/backgroud.js'

function Footer() {

  const { mode, setMode } = useContext(DataContext);
  return (
    <div className="flex flex-col justify-between px-2 py-2 h-full" style={mode === 'dark' ? darkModeBackgroud : lightModeBackgroud}>
      <div className="flex flex-col items-center gap-1 text-3xl">
        <span className="p-1 flex flex-col items-center group">
          <IoMdContacts className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200 pointer-events-none"> Contact</label>
        </span><span className="p-1 flex flex-col items-center group">
          <FaFileAlt className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Get CV</label>
        </span><span className="p-1 flex flex-col items-center group">
          <GrTrophy className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Achievements</label>
        </span><span className="p-1 flex flex-col items-center group">
          <FaCoins className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Income</label>
        </span>
        <span className="p-1 flex flex-col items-center group">
          <FaMoneyBillTrendUp className="hover:scale-125 transition-transform duration-300 " />
          <label htmlFor="@" className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"> Investments</label>
        </span>
      </div>
    </div>
  );
}

export default Footer;
