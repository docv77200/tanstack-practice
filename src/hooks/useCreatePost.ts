// src/hooks/useCreatePost.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../api/routes';
import type { CreatePostData, Post } from '../types/posts';

/**
 * Custom hook to create a new post.
 *
 * - useMutation: for POST/PUT/PATCH/DELETE
 * - useQuery:    for GET
 */
export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, CreatePostData>({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // Update the 'posts' query cache so UI updates instantly
      queryClient.setQueryData<Post[]>(['posts'], (old) =>
        old ? [newPost, ...old] : [newPost]
      );
    },
  });
}
