import axios from 'axios';

export const HTTP = axios.create({
  // baseURL: `http://localhost/`,
  baseURL: `https://apicloud.finsight.sinka.vn/`,
  headers: {
        
    
  },
  responseType: "json",
})