import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoGameFlixBlue.png';
import './Menu.css';
//import ButtonLink from "./ButtonLink";
import Button from '../Button';

function Menu({ textButton, to }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DMFLIX" />
      </Link>
      <Button as={Link} className="ButtonLink" to={to}>
        {textButton}
      </Button>
    </nav>
  );
}

export default Menu;
