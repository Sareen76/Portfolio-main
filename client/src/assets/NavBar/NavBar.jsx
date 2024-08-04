import { React, useEffect, useState } from 'react'
import './NavBar.css'
import './NavBar.jsx'
import Lists from './NavBar.jsx'
import { Link } from 'react-router-dom'
import { API } from '../../api/Api.js'

function NavBar() {

  // const [activeList, setActiveList] = useState({ list1: null, list2: null, list3: null, list4: null, list5: null, list6: null });

  // const handleClick = (list, index) => {
  //   setActiveList((prevState) => ({
  //     ...prevState,
  //     [list]: index
  //   }));
  // };



  // useEffect(() => {
  //   $(function() {
  //     // Event delegation to handle click on dynamically added elements
  //     $(document).on('click', '.menu > ul > li', function(e) {
  //       e.preventDefault(); // Prevent default action
  //       $(this).siblings().removeClass("active");
  //       $(this).toggleClass("active");
  //       $(this).find("ul").slideToggle();
  //       $(this).siblings().find("ul").slideUp();
  //       $(this).siblings().find("ul").find("li").removeClass("active");
  //       $(this).click(console.log("Clicked"+`${this}`))
  //     });
  //   });
  // }, []);

  const [personalDetails, setPersonalDetails] = useState({});


  const getPersonalData = async () => {
    try {
      const res = await API.personalDetails();
      const data = JSON.parse(res.data.personalInfo);
      setPersonalDetails(data[0])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPersonalData();
  }, [])

  return (
    <div>
      { personalDetails?.selfDetails && 
      <div className="container"> 
        <div className="sidebar">
          <div className="head">
            <div className="user-img">
              <img src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png" alt="-img" />
            </div>
            <div className="user-details">
              <p className="title">Web Developer</p>{personalDetails.selfDetails.name}<p className="name">{}</p>
            </div>
          </div>

          <div className="nav">
            <div className="menu">
              <p className="title">Main</p>
              <ul>
                {Lists.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        <i className={item.icon}></i>
                        <span className="{item.spanCName}">{item.title}</span>
                      </Link>
                    </li>
                  )
                })}

                {/* <li className="" name="Dashboard">
                  <a href="#">
                    <i className="icon ph-bold ph-house-simple"></i>
                    <span className="text">Dashboard</span>
                  </a>
                </li>

                <li className="" name="Audience">
                  <a href="#">
                    <i className="icon ph-bold ph-house-user"></i>
                    <span className="text">Audience</span>
                    <i className="arrow ph-bold ph-caret-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li name="Earnings">
                      <a href="#">
                        <span className="text">Earnings</span>
                      </a>
                    </li>
                    <li name="Funds">
                      <a href="#">
                        <span className="text">Funds</span>
                      </a>
                    </li>
                    <li name="Declines">
                      <a href="#">
                        <span className="text">Declines</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="" name="Posts">
                  <a href="#">
                    <i className="icon ph-bold ph-file-text"></i>
                    <span className="text">Posts</span>
                  </a>
                </li>

                <li className="" name="Schedules">
                  <a href="#">
                    <i className="icon ph-bold ph-calendar-blank"></i>
                    <span className="text">Schedules</span>
                  </a>
                </li>

                <li className="" name="Income">
                  <a href="#">
                    <i className="icon ph-bold ph-house-user"></i>
                    <span className="text">Income</span>
                    <i className="arrow ph-bold ph-caret-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li name="earnings">
                      <a href="#">
                        <span className="text">earnings</span>
                      </a>
                    </li>
                    <li name="Funds">
                      <a href="#">
                        <span className="text">Funds</span>
                      </a>
                    </li>
                    <li name="Declines">
                      <a href="#">
                        <span className="text">Declines</span>
                      </a>
                    </li>
                    <li name="Payouts">
                      <a href="#">
                        <span className="text">Payouts</span>
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>

            <div className="menu">
              <p className="title">Settings</p>
              <ul>
                <li className="" name="Settings">
                  <a href="#">
                    <i className="icon ph-bold ph-gear"></i>
                    <span className="text">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  }
    </div>
  )
}

export default NavBar