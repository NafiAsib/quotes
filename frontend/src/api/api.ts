import axios from "axios";

const BASE_URL = "http://localhost:3001";

export function AnimeQuote() {
  return axios.get(`${BASE_URL}/anime`);
}

export function ProgrammingQuote() {
  return axios.get(`${BASE_URL}/programming`);
}
