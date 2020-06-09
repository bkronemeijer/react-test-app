import React, { useState, useEffect } from "react";
import Timeout from "await-timeout"
import axios from 'axios'

export default function ArticleList() {
  const [articles, set_articles] = useState();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      await Timeout.set(2000)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      set_articles(res.data)
    }
    doSomeDataFetching()
  }, []);
  
  console.log(articles)
  let body

  if (articles) {body = articles.map(article => {
    return(
      <div className="articleCard">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </div>
    )
  })} else {
    body = <p>Loading...</p>
  }

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={() => {set_articles([])}}>Clear notifications</button>
      {body}
    </div>
  );
}