import React, {useEffect} from 'react';
import News from "./News";
import {connect} from "react-redux";
import {setNewsPostsAC} from "../../redux/news-reducer";


const NewsContainer = (props) => {
  return(
    <News
      posts={props.posts}
    />
  )
}

const mapStateToProps = (state) => ({
  posts: state.newsData.posts
})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => {
    dispatch(setNewsPostsAC(posts))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);