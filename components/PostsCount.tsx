import { usePosts } from '../contexts/posts';

export default function PostsCount() {
  const posts = usePosts();

  return (
    <div>
      <h1>Available posts number: {posts.length}</h1>
    </div>
  );
}
