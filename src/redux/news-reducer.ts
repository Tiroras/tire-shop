import {IPost} from "../interfaces/news/INews.types";


interface IState {
  posts: IPost[];
}

const SET_POSTS = "GET-POSTS";

const initialState: IState = {
  posts: []
}


const NewsReducer = (state: IState = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {...state, posts: action.posts};
    default:
      return state;
  }
}

export const setNewsPostsAC = (posts) => ({type: SET_POSTS});

export default NewsReducer;