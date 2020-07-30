import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import "./error.css";
import img404 from "../../assets/img/error2.png";
import ButtonLink from "../../components/Menu/ButtonLink";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="main">
      <Menu />
      <div className="mainError">
        <img src={img404} className="imgError" />
        <Link to="/">
          <ButtonLink className="buttonBack">Home</ButtonLink>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
