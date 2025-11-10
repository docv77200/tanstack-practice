// src/api/posts.ts
import type { Post, CreatePostData } from '../types/posts';

const API_BASE = 'https://jsonplaceholder.typicode.com';


export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE}/posts?_limit=10`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function createPost(data: CreatePostData): Promise<Post> {
  const response = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  const json = await response.json();

  // JSONPlaceholder doesn't really create it
  return {
    ...json,
    id: json.id ?? Date.now(),
  };
}
