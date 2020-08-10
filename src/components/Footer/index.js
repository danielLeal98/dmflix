import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logoGameFlixBlue.png';
import '../Footer/footer.css';

function Footer() {
  return (
    <FooterBase>
      <p>
        <img
          style={{ margin: '1px 5px 1px' }}
          src={Logo}
          alt="Logo Site"
          width="auto"
          height="30"
        />
      </p>
      <a
        href="https://www.linkedin.com/in/danielleal98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ margin: '1px 5px 1px' }}
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Logo Linkedin"
          width="30"
          height="30"
        />
      </a>
      <a
        href="https://github.com/danielLeal98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ margin: '1px 5px 1px' }}
          src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
          alt="Logo GitHub"
          width="30"
          height="30"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/danielleal98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Autor: Daniel Leal</h3>
      </a>
    </FooterBase>
  );
}

export default Footer;
