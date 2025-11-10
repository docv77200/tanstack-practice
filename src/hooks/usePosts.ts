// src/hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/routes';
import type { Post } from '../types/posts';


 /* useQuery handles:
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
    
    
    queryFn: fetchPosts,
    
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    gcTime: 10 * 60 * 1000,   // Cache for 10 minutes (formerly cacheTime)
    retry: 3,                  // Retry failed requests 3 times
    
    
    refetchOnWindowFocus: true,
  });
}

