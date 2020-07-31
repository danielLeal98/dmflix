import styled from "styled-components";

export const Title = styled.h3`
  display: inline-block;
  padding: 15px 15px;
  margin-bottom: 8px;
  background: red;
  border: 0;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  /* font-style: normal; */
  font-size: 1.75rem;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
  box-shadow: 0 0 20px 1px rgb(115, 115, 115, 0.7);
  @media (max-width: 800px) {
    padding: 10px;
    margin-left: 2%;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 1.125rem;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 1px;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 3%;
  margin-bottom: 16px;
`;
