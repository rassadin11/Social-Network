import React from "react"
import NewsBody from "./NewsBody/NewsBody";
import NewsComment from "./NewsComment/NewsComment";
import cl from './News.module.scss';

const News = (props) => {
  return (
    <div>
      <div className={ cl.mainTitle }>
        Новости
      </div>
      <NewsBody/>
      <NewsComment/>
    </div>
  )
};

export default News;