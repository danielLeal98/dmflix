const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3003'
  : 'https://bbb-teste.herokuapp.com';

export default {
  URL_BACKEND,
};
