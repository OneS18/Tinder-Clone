import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>
      <VolunteerActivismIcon className='header__logo' fontSize='large' />
      <IconButton>
        <ForumIcon fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  );
};

export default Header;
