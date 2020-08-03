import styled from "styled-components";

export const ButtonCadastrar = styled.button`
  padding: 16px 24px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: #d9d9d9;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  margin-left: 20px;
  &:hover {
    opacity: 1;
    max-zoom: 0.3s;
  }
  @media (max-width: 800px) {
    margin-left: 42%;
  }
`;
export const ButtonBack = styled.image`
  padding: 16px 24px;
  box-sizing: border-box;
  background: url("https://img.icons8.com/cotton/64/000000/circled-left-2.png");
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: #d9d9d9;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  margin: 10px;
  &:hover {
    opacity: 1;
    max-zoom: 0.3s;
  }
  @media (max-width: 800px) {
  }
`;

export const H1 = styled.h1`
  @media (max-width: 800px) {
    text-align: center;
  }
`;
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
  }
`;
export const Img = styled.img``;
export const IconsTrash = styled.img`
  height: 26px;
  width: 26px;
  margin-left: 10px;
`;
