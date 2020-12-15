import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Medium', sans-serif;
  padding: 16px 24px;
  box-sizing: border-box;
  background-color: var(--primary-black-2);
  border: none;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export default Button;
