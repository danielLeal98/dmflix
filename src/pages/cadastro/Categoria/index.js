import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import { ButtonCadastrar, DivButton, H1, Img, IconsTrash } from "./styles";
import "../../../components/Menu/Menu.css";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import trashIcon from "../../../assets/img/icons8-trash-40.png";

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
              cor: "#fafafa",
              createdAt: new Date(),
            })
            .then(() => {
              window.location.reload(true);
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
          <Link to="/">
            <Img src="https://img.icons8.com/cotton/64/000000/circled-left-2.png" />
          </Link>
          <ButtonCadastrar>
            <Img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
          </ButtonCadastrar>
        </DivButton>
      </form>

      <h3>Categorias Cadastradas:</h3>
      <ul>
        {categorias.map((categoria, index) => (
          <li style={{ display: "flex" }} key={`${categoria.titulo}`}>
            {console.log("To aquiii")}
            {console.log(categorias)}
            <span>* {categoria.titulo}</span>
            <IconsTrash
              src={trashIcon}
              id={categoria.id}
              onClick={(e) => {
                categoriasRepository.deleteCategories(categoria.id);
                window.location.reload(true);
              }}
            />
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}
export default CadastroCategoria;
