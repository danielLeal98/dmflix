import config from '../config';
import { toast } from 'react-toastify';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados das Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados das Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function create(obj) {
  return fetch(`${URL_CATEGORIES}?_embed=categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        toast.success('Categoria cadastrada com sucesso');
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar as Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}

function deleteCategories(obj) {
  return fetch(`${URL_CATEGORIES}/${obj}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        toast.success('Categoria deletada com Sucesso!');
        return result;
      } else {
        toast.error('Não foi possível deletar a categoria selecionada');
        throw new Error('Não foi possível deletar a categoria selecionada');
      }
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function Patch(id, categoria) {
  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados das Categorias');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  deleteCategories,
  Patch,
};
