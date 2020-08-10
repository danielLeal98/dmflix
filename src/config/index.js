const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'https://games-flix.herokuapp.com'
  : 'http://localhost:3003';

export default {
  URL_BACKEND,
};
