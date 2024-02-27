import axios from "axios";

const baseURL = "http://localhost:3001";

export  function getAllNews() {
    return  axios.get(`${baseURL}/news`)
    .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
}

export  function getTopNews() {
  return  axios.get(`${baseURL}/news/top`)
  .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}
