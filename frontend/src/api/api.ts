import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

export function AnimeQuote() {
  return axios.get(`${BASE_URL}/anime`);
}

export function ProgrammingQuote() {
  return axios.get(`${BASE_URL}/programming`);
}
