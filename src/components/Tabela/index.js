import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
`;

const Table = styled.div`
  border: 2px solid var(--primary);
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Titulo = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 20px;
  border-bottom: 2px solid var(--primary);
  &:not(.ultimo) {
    border-right: 2px solid var(--primary);
  }
`;

const Conteudo = styled.div`
  padding-left: 10px;
  color: var(--white);
`;

Conteudo.Paragrafo = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { Table, Titulo, Conteudo, Container };
