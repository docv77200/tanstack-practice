// src/types/post.ts

/**
 * Post type from JSONPlaceholder API
 * This represents a blog post
 */
export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  /**
   * Type for creating a new post (no id yet)
   */
  export interface CreatePostData {
    userId: number;
    title: string;
    body: string;
  }