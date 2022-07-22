import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./qv-logo.png";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <MenuIcon className="menu-bar" {...bindTrigger(popupState)} />

            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Home</MenuItem>
              <MenuItem onClick={popupState.close}>My Profile</MenuItem>
              <MenuItem onClick={popupState.close}>Log in</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>

      <h3>QV-KV</h3>
      <img className="nav-logo" src={Logo} alt="Logo" />
    </div>
  );
}

export default Nav;
{
  /* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div>
        If no user is logged in, show these links
        {!user.id && (
          If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        If a user is logged in, show these links
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div> */
}
