import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";
import logo from './image/logo.png'

const NavBar = () => {
 const [isScrolled,setIsScrolled] = useState(false);

 window.onscroll = () =>{
  setIsScrolled(window.scrollY === 0 ? false : true);
  return () => (window.onscroll = null);
 }

  return (
    <div className={isScrolled ? "navbar scrolled ": "navbar"}>
      <div className="containor">
        <div className="left">
          <img
            src={logo}
            alt="netflix_logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
            alt="profile_image"
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Setting</span>
              <hr className="hr"/>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
