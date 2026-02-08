import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="nav__bar">
            <div>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
            </div>
          
          <div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">TV Show</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">New & Popular</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
            <li>
              <a href="#">Browse My Language</a>
            </li>
          </div>
          <div className="icons">
            <SearchIcon className="header__searchIcon" />
            <NotificationsIcon className="header__notificationIcon" />
            <AccountCircleIcon className="header__accountIcon" />
            <ArrowDropDownIcon className="header__dropdownIcon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
