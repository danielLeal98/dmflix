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
    </FooterBase>
  );
}

export default Footer;
