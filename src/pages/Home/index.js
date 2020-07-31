import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
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
    <PageDefault to="/cadastro/video" textButton="Novo Vídeo" paddingAll={0}>
      {initialValues.length === 0 && <div>Loading...</div>}
      {initialValues.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle="Seja bem vindo ao GamesFlix o portal com o trailer dos melhores jogos por gênero!"
                url="https://youtu.be/ycvX_48RYSA"
                videoDescription={
                  "Como realizar seus sonhos e se tornar um jogador profissional de games? Veja abaixo um pouco sobre todos os jogos da atualidade."
                }
              />
              <Carousel ignoreFirstVideo category={initialValues[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
