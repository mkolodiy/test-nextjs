import { createContext, ReactNode, useContext } from 'react';
import { Post } from '../types/posts';

type PostsContextState = {
  posts: Post[];
};

export const PostsContext = createContext<PostsContextState>({
  posts: [],
});

export const usePosts = () => useContext(PostsContext).posts;
