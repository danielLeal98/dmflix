import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";

function Home() {
  const [initialValues, setinitialValues] = useState([]);
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setinitialValues(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault>
      <Menu textButton="Novo Vídeo" to="/cadastro/video" />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Como realizar seus sonhos e se tornar um jogador profissional de games? Veja abaixo um pouco sobre todos os jogos da atualidade."
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />
    </PageDefault>
  );
}

export default Home;
