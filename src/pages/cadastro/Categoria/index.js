import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import { ButtonCadastrar, DivButton, H1, Img } from "./styles";
import "../../../components/Menu/Menu.css";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";

function CadastroCategoria() {
  const initialValues = {
    nome: "",
    descricao: "",
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = window.location.hostname.includes("localhost")
        ? "http://localhost:3003/categorias"
        : "https://gmflix.herokuapp.com/categorias";
      fetch(URL).then(async (reponse) => {
        console.log(URL);
        if (reponse.ok) {
          const resposta = await reponse.json();
          setCategorias(resposta);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);
  return (
    <PageDefault textButton="Novo Vídeo" to="/cadastro/video">
      <H1>Cadastro de Categoria: {values.nome}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          //clearForm();

          categoriasRepository
            .create({
              nome: values.nome,
              descricao: values.descricao,
              cor: "#fafafa",
            })
            .then(() => {
              alert("Categoria cadastrada com sucesso!");
              //history.push("/");
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
          <Link to="/">
            <Img src="https://img.icons8.com/cotton/64/000000/circled-left-2.png" />
          </Link>
          <ButtonCadastrar>
            <Img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
          </ButtonCadastrar>
        </DivButton>
      </form>
      <h1>Categorias Cadastradas</h1>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            {categoria.nome}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}
export default CadastroCategoria;
