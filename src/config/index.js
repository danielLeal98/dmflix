const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:3003"
  : "https://games-flix.herokuapp.com";

export default {
  URL_BACKEND,
};
