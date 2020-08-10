import config from '../config';
import { toast } from 'react-toastify';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const urlTeste = 'https://games-flix.herokuapp.com/videos';

function create(obj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        toast.success('Vídeo cadastrado com sucesso!');
        return result;
      }
      toast.error('Não foi possível cadastrar o Video');
      throw new Error('Não foi possível cadastrar os dados');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}
function getAll() {
  return fetch(`${urlTeste}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      toast.error('Não foi possível pegar os dados das Categorias');
      throw new Error('Não foi possível pegar os dados das Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}

export default {
  create,
  getAll,
};
