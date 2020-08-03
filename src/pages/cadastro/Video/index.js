import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";
import { ButtonCadastrar, DivButton, H1 } from "../Categoria/styles";
import useForm from "../../../hooks/useForm";
import "../../../components/Menu/Menu.css";
import Select from "react-select";
import { element } from "prop-types";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({});

  const optionCategories = categorias.map((element) => {
    const categoria = {
      value: element.id.toString(),
      label: element.titulo,
    };
    return categoria;
  });

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#023950",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault textButton="Nova Categoria" to="/cadastro/categoria">
      <H1>Cadastro de Video {values.titulo}</H1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (window.location.href.includes("localhost")) {
            const categoriaEscolhida = categorias.find(
              (categoria) => categoria.titulo === values.categoria
            );

            videosRepository
              .create({
                titulo: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id,
                createdAt: new Date(),
              })
              .then(() => {
                alert("Vídeo cadastrado com sucesso em Homologação!");
                //history.push("/");
              });
          } else {
            const categoriaEscolhida = categorias.find(
              (categoria) => categoria.nome === values.categoria
            );

            videosRepository
              .create({
                nome: values.titulo,
                url: values.url,
                categoriaId: categoriaEscolhida.id,
                createdAt: new Date(),
              })
              .then(() => {
                alert("Vídeo cadastrado com sucesso em Produção!");
                history.push("/");
              });
          }
        }}
      >
        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <DivButton>
          <Link to="/">
            <img
              src="https://img.icons8.com/cotton/64/000000/circled-left-2.png"
              alt="Back"
            />
          </Link>
          <ButtonCadastrar type="submit">
            <img
              src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"
              alt="Save"
            />
          </ButtonCadastrar>
        </DivButton>
      </form>
    </PageDefault>
  );
}
export default CadastroVideo;
