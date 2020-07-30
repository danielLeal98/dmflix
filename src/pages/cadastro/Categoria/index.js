import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import "../../../components/Menu/Menu.css";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
  };
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
      const URL = "http://localhost:3003/categorias";
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
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          label="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <Button className="ButtonLink">Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={index + 1}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
