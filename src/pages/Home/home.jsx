import { useEffect, useState } from "react";
import { Card } from "../../components/Card/card";
import { getAllNews, getTopNews } from "../../services/postServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";



export default function Home(){

const [news, setNews] = useState([])
const [topNews, setTopNews] = useState({})

async function findAllNews(){
    const response = await getAllNews()
    setNews( response.data.results)
    //console.log(response, "allNews")    //debug
    
    const topNewsResponse = await getTopNews()
    setTopNews(topNewsResponse.data.news)
    //console.log(topNewsResponse , "topNews")   //debug
  }
  
  useEffect(() => {
    findAllNews()
  }, [])
  

    return (
        <>
      <HomeHeader>
      <Card 
        top= {true}
        title = {topNews.title}
        text = {topNews.text}
        banner = {topNews.banner} 
        likes = {topNews.likes}
        comments = {topNews.comments}   
        />
      </HomeHeader>
      <HomeBody>
      {news.map((item) => (
        <Card 
        key={item.id} 
        title = {item.title}
        text = {item.text}
        banner = {item.banner} 
        likes = {item.likes}
        comments = {item.comments}   
        /> // Passe os dados para o componente Card
      ))}
      </HomeBody>
    </>
        

    ) 
}
