import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriasRepository from "../../repositories/categorias";
import videosRepository from "../../repositories/videos";
import PageDefault from "../../components/PageDefault";

function Home() {
  const [initialValues, setinitialValues] = useState([]);
  const [initialVideos, setinitialVideos] = useState([]);
  useEffect(() => {
    videosRepository
      .getAll()
      .then((videos) => {
        console.log("meus videos");
        console.log(videos);
        setinitialVideos(videos);
      })
      .catch((err) => {
        console.log(err.message);
      });

    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setinitialValues(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault to="/cadastro/video" textButton="Novo Vídeo" paddingAll={0}>
      {initialValues.length === 0 && <div>Loading...</div>}
      {initialVideos.map((video, indice) => {
        return (
          <ul>
            <li>
              <span> {video.id}</span>
              <span> {video.url}</span>
              <span> {video.titulo}</span>
              <span> {video.categoriaId}</span>
            </li>
          </ul>
        );
      })}
    </PageDefault>
  );
}

export default Home;
