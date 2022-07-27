import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./qv-logo.png";

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <>
      {/* If user is not logged in, show these links in NavBar */}
      {!user.id && (
        <div className="nav">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <MenuIcon className="menu-bar" {...bindTrigger(popupState)} />
                <Menu {...bindMenu(popupState)}>
                  <Link className="nav-link" to="/home">
                    <MenuItem onClick={popupState.close}>Home</MenuItem>
                  </Link>

                  <Link className="nav-link" to="/login">
                    <MenuItem onClick={popupState.close}>
                      Login/Register
                    </MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {/* NavBar company name */}
          <h3>Groupii</h3>
          {/* NavBar company logo, will go back to home page if clicked */}
          <Link to="/home">
            <img className="nav-logo" src={Logo} alt="Logo" />
          </Link>
        </div>
      )}

      {/* If user is logged in, show these links in NavBar */}
      {user.id && (
        <div className="nav">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <MenuIcon className="menu-bar" {...bindTrigger(popupState)} />
                <Menu {...bindMenu(popupState)}>
                  <Link className="nav-link" to="/home">
                    <MenuItem onClick={popupState.close}>Home</MenuItem>
                  </Link>

                  <Link className="nav-link" to="/user">
                    <MenuItem onClick={popupState.close}>My Profile</MenuItem>
                  </Link>
                  {/* Clicking Log Out will log user out and show Log In view */}
                  <Link className="nav-link" to="/user">
                    <MenuItem onClick={() => dispatch({ type: "LOGOUT" })}>
                      Log out
                    </MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {/* NavBar company name */}
          <h3>Groupii</h3>
          {/* NavBar company logo, will go back to home page if clicked */}
          <Link to="/home">
            <img className="nav-logo" src={Logo} alt="Logo" />
          </Link>
        </div>
      )}
    </>
  );
}

export default Nav;
