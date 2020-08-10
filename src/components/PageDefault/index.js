import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from '../../GlobalStyled';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 3%;
  padding-right: 3%;
  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, textButton, to, paddingAll }) {
  return (
    <>
      <Menu textButton={textButton} to={to} />
      <Main paddingAll={paddingAll}>{children}</Main>
      <GlobalStyled />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Footer />
    </>
  );
}
export default PageDefault;
