import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 3%;
  padding-right: 3%;
`;

function PageDefault({ children, textButton, to }) {
  return (
    <>
      <Menu textButton={textButton} to={to} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default PageDefault;
