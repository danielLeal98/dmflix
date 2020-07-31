const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:3003"
  : "https://gmflix.herokuapp.com";

export default {
  URL_BACKEND,
};
