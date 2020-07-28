import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 300px;
  height: 170px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
