import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { useHistory, Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { toast } from 'react-toastify';
import { ButtonCadastrar, DivButton, H1, Img } from './styles';
import '../../../components/Menu/Menu.css';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import iconDelete from '../../../assets/img/icons8-delete-64.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Table, Titulo, Container, Conteudo } from '../../../components/Tabela';
import Spinner from '../../../components/Spinner';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      })
      .catch((e) => toast.error(e.message));
  }, []);

  function handleRemove(e) {
    const target = String(e.target.getAttribute('target'));

    categoriasRepository
      .deleteCategories(target)
      .then(() => {
        categoriasRepository
          .getAll()
          .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
          })
          .catch((err) => toast.error(err.message));
      })
      .catch(() => toast.error('Não foi possível deletar a categoria'));
  }

  return (
    <PageDefault textButton="Novo Vídeo" to="/cadastro/video">
      <H1>Cadastro de Categoria: {values.titulo}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();

          let errors = [];
          const chaves = Object.keys(values);

          errors = chaves.filter((chave) => {
            return !values[chave];
          });

          if (errors.length > 0) {
            errors.forEach((error) => {
              toast.error(`O Campo ${error} precisa ser preenchido`);
            });

            return;
          }

          categoriasRepository
            .create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: '#2D4059',
              createdAt: new Date(),
              updatedAt: new Date(),
            })
            .then(() => {
              //history.push("/");
            });
        }}
      >
        <FormField
          label="Titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <DivButton>
          <Img src={iconDelete} onClick={clearForm} />
          <ButtonCadastrar>
            <Img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
          </ButtonCadastrar>
        </DivButton>
      </form>
      <Table>
        <Container>
          <Titulo className="first">Titulo</Titulo>
          <Titulo className="first">Descrição</Titulo>
          <Titulo> Editar</Titulo>
          <Titulo> Apagar</Titulo>
        </Container>
        {categorias.lenght === 0 && <Spinner>Loading...</Spinner>}
        {categorias.map((categoria, index) => {
          console.log(categorias);
          return (
            <Container key={index}>
              <Conteudo className="first">{categoria.titulo}</Conteudo>
              <Conteudo className="first">{categoria.descricao}</Conteudo>
              <Conteudo>
                <Conteudo.Paragrafo
                  className="edit"
                  as={Link}
                  to={`/editar/categoria?id=${categoria.id}&titulo=${categoria.titulo}&descricao=${categoria.descricao}`}
                >
                  Editar
                </Conteudo.Paragrafo>
              </Conteudo>
              <Conteudo>
                <Conteudo.Paragrafo
                  target={categoria.id}
                  onClick={handleRemove}
                >
                  Apagar
                </Conteudo.Paragrafo>
              </Conteudo>
            </Container>
          );
        })}
      </Table>
    </PageDefault>
  );
}
export default CadastroCategoria;
