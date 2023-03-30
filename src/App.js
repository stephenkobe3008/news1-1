import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { getTopHeadlines } from "./services/newsApi";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getTopHeadlines();
      setArticles(response.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <NewsList articles={articles} />
      </main>
    </div>
  );
}

export default App;
