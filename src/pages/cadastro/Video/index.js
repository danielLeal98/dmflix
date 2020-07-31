import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import SelectForm from "../../../components/SelectForm";
import { ButtonCadastrar, DivButton, H1 } from "../Categoria/styles";
import "../../../components/Menu/Menu.css";

function CadastroVideo() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
  };
  const doisPontos = ":";
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, //nome: 'valor'
    });
  }

  function handleChange(info) {
    setValue(info.target.getAttribute("name"), info.target.value);
  }
  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/videos";
      fetch(URL).then(async (reponse) => {
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
    <PageDefault textButton="Nova Categoria" to="/cadastro/categoria">
      <H1>Cadastro de Video: {values.nome}</H1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome do Vídeo"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <SelectForm />

        <DivButton>
          <Link to="/">
            <img src="https://img.icons8.com/cotton/64/000000/circled-left-2.png" />
          </Link>
          <Link to="/categorias">
            <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
          </Link>
        </DivButton>
      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return <li key={index + 1}>{categoria.nome}</li>;
        })}
      </ul>
    </PageDefault>
  );
}
export default CadastroVideo;
