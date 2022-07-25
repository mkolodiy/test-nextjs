import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import PostsCount from '../components/PostsCount';
import { PostsContext } from '../contexts/posts';
import styles from '../styles/List.module.css';
import { Post } from '../types/posts';

type Props = {
  posts: Post[];
};

export async function getServerSideProps(_context: NextPageContext) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const posts = await response.json();

  return {
    props: { posts } as Props,
  };
}

const List: NextPage<Props> = ({ posts }) => {
  return (
    <PostsContext.Provider value={{ posts }}>
      <div style={{ padding: '100px' }}>
        <div>
          <Link href="/">Back to home</Link>
        </div>
        <PostsCount />
        {posts.map(({ id, title, body }) => (
          <div key={id} className={styles.listItem}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </PostsContext.Provider>
  );
};

export default List;
