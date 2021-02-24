import React, {useEffect} from 'react';
import News from "./News";
import {connect} from "react-redux";
import {setNewsPostsAC} from "../../redux/news-reducer";
import {newsAPI} from "../../api/api";
import ThereNothing from "../general/ThereNothing";
import {ReducerType} from "../../redux/reducer";


const NewsContainer = (props) => {
  useEffect(() => {
    newsAPI.getPosts().then(response => {
      props.setPosts(response)
    })
  }, [])

  if(props.posts.length === 0){
    return (
      <ThereNothing />
    )
  }

  return(
    <News
      posts={props.posts}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  posts: state.newsData.posts
})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    dispatch(setNewsPostsAC(posts))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);