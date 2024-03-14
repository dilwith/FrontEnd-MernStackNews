import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3001";

export async function getAllPosts() {
  const response = await axios.get(`${baseURL}/posts`); 
  return response;
}

export async function getTopPost() {
  const response = await axios.get(`${baseURL}/posts/top`); 
  return response;
}

export async function searchPosts(title) {
  const response = await axios.get(`${baseURL}/posts/search?title=${title}`);
  return response;
}

export async function getAllPostsByUser(){
  const response = axios.get(`${baseURL}/posts/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })
  return response;
}