import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import List from "./List";
import Spinner from "./Spinner";

const News = () => {
  const [news, setNews] = useState([]);

  const URL = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(URL)
      .then((respone) => respone.json())
      .then((result) => setNews(result.data))
      .catch((error) => alert(error));
  };
  
  console.log(news);

  return (
    <>
      <h1>news lists</h1>
      <div className="card">
        <ul>
          <li>
            <Link to="/news/newsuz">News sport </Link>
          </li>
          <li>
            <Link to="/news/newssport">News Uzbekistan</Link>
          </li>
        </ul>
      </div>
      <Outlet />

      <ul>
        {news.length === 0 ? (
          <Spinner />
        ) : (
          news.map((item) => {
            return <List data={item} key={item.id} />;
          })
        )}
      </ul>
    </>
  );
};

export default News;
