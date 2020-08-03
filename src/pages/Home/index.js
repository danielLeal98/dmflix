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
                videoTitle="Seja Bem Vindo ao Games Flix"
                url="https://www.youtube.com/watch?v=ycvX_48RYSA&t=3s"
                videoDescription={
                  "Nesta plataforma você podera encontrar os trailers dos melhores jogos do momento por gênero."
                }
              />
              <Carousel category={initialValues[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
