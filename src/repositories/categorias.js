import config from '../config';

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
        alert('Categoria cadastrada com sucesso');
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar as Categorias');
    })
    .catch((err) => {
      console.log(err.message);
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
        alert('Categoria deletada com Sucesso!');
        return result;
      } else {
        alert('Não foi possível deletar a categoria selecionada');
        throw new Error('Não foi possível deletar a categoria selecionada');
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  deleteCategories,
};
