import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import iconDelete from '../../../assets/img/icons8-delete-64.png';
import {
  ButtonCadastrar,
  DivButton,
  H1,
  Img,
} from '../../cadastro/Categoria/styles';
import PageDefault from '../../../components/PageDefault';

export default function EditaCategoria() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const history = useHistory();

  const initialValues = {
    titulo: query.get('titulo'),
    descricao: query.get('descricao'),
    updatedAt: new Date(),
  };

  const { handleChange, clearForm, values, handleClick } = useForm(
    initialValues
  );

  const id = query.get('id');

  return (
    <PageDefault textButton="Novo Vídeo" to="/cadastro/video">
      <H1>Editar Categoria: {values.titulo}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
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
            .Patch(id, values)
            .then(() => {
              toast.success('Categoria editada com sucesso');
              history.push('/cadastro/categoria');
            })
            .catch(() => toast.error('Não foi possível cadastrar a categoria'));
        }}
      >
        <FormField
          label="Titulo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        >
          Título da Categoria:
        </FormField>

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        >
          Descrição:
        </FormField>

        <DivButton>
          <Link to="/">
            <Img src={iconDelete} />
          </Link>
          <ButtonCadastrar>
            <Img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
          </ButtonCadastrar>
        </DivButton>
      </form>
    </PageDefault>
  );
}
