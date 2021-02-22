import React from 'react';
import PostContainer from "./post/Post.container";
import classes from "./News.module.css";


const News = (props) => {
  return(
    <div className={classes.layout}>
      <h2>Новости</h2>
      <div className={classes.posts}>
        {props.posts.map((post) => (
          <PostContainer
            key={post.id}
            id={post.id}
            img={post.img}
            text={post.text}
            header={post.header}
          />
        ))}
      </div>
    </div>
  )
}

export default News;