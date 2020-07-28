import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <p>
        <img
          style={{ margin: "5px" }}
          src={Logo}
          alt="Logo Site"
          width="100"
          height="50"
        />
      </p>
      <a href="https://www.linkedin.com/in/danielleal98/" target="_blank">
        <img
          style={{ margin: "5px" }}
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Logo Linkedin"
          width="50"
          height="50"
        />
      </a>
      <a href="https://github.com/danielLeal98" target="_blank">
        <img
          style={{ margin: "5px" }}
          src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
          alt="Logo GitHub"
          width="50"
          height="50"
        />
      </a>
      <p>
        <a href="https://www.linkedin.com/in/danielleal98/" target="_blank">
          <span>Daniel Leal</span>
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
