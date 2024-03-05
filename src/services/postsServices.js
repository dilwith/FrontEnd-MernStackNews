import axios from "axios";

const baseURL = "http://localhost:3001";

export  function getAllPosts() {
    return  axios.get(`${baseURL}/posts`)
    .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
}

export  function getTopPost() {
  return  axios.get(`${baseURL}/posts/top`)
  .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

export  function searchPosts(title) {
  return  axios.get(`${baseURL}/posts/search?title=${title}`)
  .then(response => {
      return response;
    })
    .catch(error => {
      return error; 
      
    });
}

