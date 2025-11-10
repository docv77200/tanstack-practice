// src/hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/routes';
import type { Post } from '../types/posts';

/**
 * Custom hook to fetch all posts
 * 
 * This wraps useQuery and provides a clean interface for components
 * 
 * useQuery handles:
 * - Automatic caching
 * - Background refetching
 * - Loading/error states
 * - Deduplication (if multiple components call this, only 1 API request)
 */
export function usePosts() {
  return useQuery<Post[], Error>({
    /**
     * queryKey: Unique identifier for this query
     * - Used for caching
     * - Used for invalidation
     * - Array format: ['posts'] or ['posts', id] or ['posts', { filter: 'active' }]
     */
    queryKey: ['posts'],
    
    /**
     * queryFn: Function that returns a Promise
     * This is your API call
     */
    queryFn: fetchPosts,
    
    /**
     * Optional: Configuration
     */
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    gcTime: 10 * 60 * 1000,   // Cache for 10 minutes (formerly cacheTime)
    retry: 3,                  // Retry failed requests 3 times
    
    /**
     * Optional: refetchOnWindowFocus
     * Automatically refetch when user comes back to tab
     */
    refetchOnWindowFocus: true,
  });
}

/**
 * What useQuery returns:
 * 
 * {
 *   data: Post[] | undefined          - The actual data
 *   isLoading: boolean                - First load (no cached data)
 *   isFetching: boolean               - Any fetch (including background)
 *   isError: boolean                  - Is there an error?
 *   error: Error | null               - The error object
 *   refetch: () => void               - Manually refetch
 *   isSuccess: boolean                - Has data loaded successfully?
 * }
 */