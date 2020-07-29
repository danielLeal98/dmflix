import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

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
          label="Descrição"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <button>Cadastrar</button>
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
