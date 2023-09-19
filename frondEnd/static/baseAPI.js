import axios from 'axios';

export const HTTP = axios.create({
  // baseURL :`http://api.finsight.anhduc.site/`,
  baseURL:'http://localhost:4000',
  headers: {
  },
  responseType: "json",
})