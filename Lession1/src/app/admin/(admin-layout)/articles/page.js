"use client";
import { useEffect, useState } from "react";
import ArticlesContainer from "../../_components/ArticlesContainer";
function articlesPage() {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    fetch("/api/admin/articles", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setArticleList(res.data));
  }, []);
  return <ArticlesContainer>
    
  </ArticlesContainer>;
  // return <div>Hello Article</div>
}

export default articlesPage;
