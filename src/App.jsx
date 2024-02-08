// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
// import { useState, useEffect } from "react";

function App() {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const getNews = async () => {
  //     try {
  //       const data = await fetch(
  //         "https://newsapi.org/v2/top-headlines?country=us&apiKey=27d3cd8f066a4a17b07a8b4b8d194b29"
  //       );
  //       const res = await data.json();

  //       if (res.articles) {
  //         setNews(res.articles);
  //       } else {
  //         console.error("Error fetching news:", res);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching news:", error.message);
  //     }
  //   };

  //   getNews();
  // }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
