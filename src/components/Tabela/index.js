import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 10% 10%;
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
  padding: 5px 5px 5px 5px;
  font-size: 20px;
  background-color: var(--primary);
  color: var(--white);

  border-bottom: 2px solid var(--primary);
  &:not(.first) {
    text-align: center;
  }
`;

const Conteudo = styled.div`
  padding-left: 10px;
  font-size: 16px;
  color: var(--blackLighter);
`;

Conteudo.Paragrafo = styled.p`
  display: grid;
  cursor: pointer;
  text-align: center;
  margin: 10px;
  border: 1px solid var(--primary);
  &:hover:not(.edit) {
    background-color: red;
    color: var(--white);
  }
  &:hover {
    background-color: var(--grey);
    color: var(--white);
  }
`;

export { Table, Titulo, Conteudo, Container };
