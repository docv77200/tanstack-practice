// src/App.tsx
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>TanStack Query Practice</h1>
      <p>useQuery + useMutation on JSONPlaceholder</p>

      <CreatePost />
      <hr style={{ margin: '2rem 0' }} />
      <PostList />
    </div>
  );
}

export default App;
