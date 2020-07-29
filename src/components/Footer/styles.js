import styled from "styled-components";

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 22px;
  padding-bottom: 22px;
  color: var(--white);
  text-align: center;
  margin-top: 30px;
  @media (max-width: 800px) {
    margin-bottom: 32px;
    margin-top: 32px;
  }
`;
