import React from 'react'
import "./header.css"
import Netflixlogo from "../../assets/img/netflix_rep.svg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className='header_outer_container'>
       <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src={Netflixlogo} width="100" alt="Netflex Logo" /></li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latast</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
       </div>
    </div>
  )
}

export default Header
