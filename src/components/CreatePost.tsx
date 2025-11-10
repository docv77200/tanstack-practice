// src/components/CreatePost.tsx
import { useState, type FormEvent } from 'react';
import  { useCreatePost } from '../hooks/useCreatePost';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const createPost = useCreatePost();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;

    createPost.mutate(
      { title, body, userId: 1 },
      {
        onSuccess: () => {
          setTitle('');
          setBody('');
        },
      }
    );
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Create Play</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.5rem', maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
        />

        <button type="submit" disabled={createPost.isPending}>
          {createPost.isPending ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {createPost.isError && (
        <p style={{ color: 'red' }}>Error: {createPost.error?.message}</p>
      )}

      {createPost.isSuccess && (
        <p style={{ color: 'green' }}>Post created (optimistically added to list)</p>
      )}
    </div>
  );
}
