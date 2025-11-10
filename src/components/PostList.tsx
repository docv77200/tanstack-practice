import { usePosts } from '../hooks/usePosts';

export default function PostList() {
  const { data: posts, isLoading, isError, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts?.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <small>userId: {post.userId}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
