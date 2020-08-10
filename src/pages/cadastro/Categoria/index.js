import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { ButtonCadastrar, DivButton, H1, Img } from './styles';
import '../../../components/Menu/Menu.css';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import iconDelete from '../../../assets/img/icons8-delete-64.png';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../components/Tabela/styles.css';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:3003/categorias'
        : 'https://games-flix.herokuapp.com/categorias';
      fetch(URL).then(async (response) => {
        const result = await response.json();
        setCategorias(result);
        return;
      });
    }
  }, []);

  function getCategorias() {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        console.log(categoriasFromServer);
        setCategorias(categoriasFromServer);
      })
      .catch((err) => alert(err.message));
  }

  function handleRemove(e) {
    const target = String(e.target.getAttribute('target'));

    categoriasRepository
      .deleteCategories(target)
      .then(() => {
        alert('Categoria deletada com sucesso');
        categoriasRepository
          .getAll()
          .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
          })
          .catch((err) => alert(err.message));
      })
      .catch(() => alert('Não foi possível deletar a categoria'));
  }

  return (
    <PageDefault textButton="Novo Vídeo" to="/cadastro/video">
      <H1>Cadastro de Categoria: {values.titulo}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();

          categoriasRepository
            .create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: '#2D4059',
              createdAt: new Date(),
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
      <div style={{ marginBottom: '20px', textAlign: '-webkit-center' }}>
        <BootstrapTable data={categorias} class="dataTable" exportCSV>
          <TableHeaderColumn dataField="id" isKey>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="titulo">Titulo</TableHeaderColumn>
          <TableHeaderColumn dataField="descricao">Descrição</TableHeaderColumn>
        </BootstrapTable>
      </div>
    </PageDefault>
  );
}
export default CadastroCategoria;
