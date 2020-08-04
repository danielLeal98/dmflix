import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import { ButtonCadastrar, DivButton, H1, Img, IconsTrash } from "./styles";
import "../../../components/Menu/Menu.css";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import iconDelete from "../../../assets/img/icons8-delete-64.png";
import { Table, Titulo, Container, Conteudo } from "../../../components/Tabela";

function CadastroCategoria() {
  const initialValues = {
    id: "",
    nome: "",
    descricao: "",
  };
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = window.location.hostname.includes("localhost")
        ? "http://localhost:3003/categorias"
        : "https://games-flix.herokuapp.com/categorias";
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setCategorias(result);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  function handleRemove(e) {
    const target = String(e.target.getAttribute("target"));

    categoriasRepository
      .deleteCategories(target)
      .then(() => {
        alert("Categoria deletada com sucesso");
        categoriasRepository
          .getAll()
          .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
          })
          .catch((err) => alert(err.message));
      })
      .catch(() => alert("Não foi possível deletar a categoria"));
  }

  return (
    <PageDefault textButton="Novo Vídeo" to="/cadastro/video">
      <H1>Cadastro de Categoria: {values.nome}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();

          categoriasRepository
            .create({
              titulo: values.nome,
              descricao: values.descricao,
              cor: "#2D4059",
              createdAt: new Date(),
            })
            .then(() => {
              history.push("/");
            });
        }}
      >
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
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
          <Titulo>Titulo</Titulo>
          <Titulo>Descrição</Titulo>
          <Titulo className="ultimo">Remover</Titulo>
        </Container>
        {categorias.lenght === 0 && <div>Loading...</div>}
        {categorias.map((categoria) => {
          return (
            <Container>
              <Conteudo>{categoria.titulo}</Conteudo>
              <Conteudo>{categoria.descricao}</Conteudo>
              <Conteudo>
                <Conteudo.Paragrafo
                  target={categoria.id}
                  onClick={handleRemove}
                >
                  Remover
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
