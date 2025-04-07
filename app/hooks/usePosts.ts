import { useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Post {
	label: string;
	important: boolean;
	like: boolean;
	id: string;
}

export function usePosts(initialState: Post[]) {
	const [posts, setPosts] = useState<Post[]>(initialState);
	const [term, setTerm] = useState<string>('');
	const [filter, setFilter] = useState<'all' | 'like'>('all');
	const liked: number = useMemo(() => posts.filter((item) => item.like).length,[posts]);
	const allPosts: number = posts.length;

  const filterPost = useCallback((items: Post[], filter: "all" | "like"): Post[] => {
    if (filter === "like") return items.filter(it => it.like);
    return items;
  }, []);
  const searchPosts = useCallback((items: Post[], str: string): Post[] => {
    if (str.length === 0) return items;
    return items.filter(it =>
      it.label.toLowerCase().includes(str.toLowerCase())
    );
  }, []);
  const visiblePost: Post[] = useMemo(() => {
    return filterPost(searchPosts(posts, term), filter);
  }, [posts, term, filter]);

	const handleSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setTerm(e.target.value);
		}, [term]
  );
  
	const handleFilterSelect = useCallback(
		(filter: 'all' | 'like'): void => {
			setFilter(filter);
		}, [filter]
  );
  
	function handleDeletePost(id: string): void {
		setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
	}

	function handleToggleImportant(id: string): void {
		setPosts((prevPosts) =>
			prevPosts.map((post) =>
				post.id === id ? { ...post, important: !post.important } : post
			)
		);
  }
  
	function handleToggleLiked(id: string): void {
		setPosts((prevPosts) =>
			prevPosts.map((post) =>
				post.id === id ? { ...post, like: !post.like } : post
			)
		);
	}

	const handleAddPost = useCallback((formData: FormData): void => {
		const text = formData.get('newpost');
		if (typeof text === 'string' && text.trim() !== '') {
			const newItem: Post = {
				label: text,
				important: false,
				like: false,
				id: uuidv4(),
			};
			setPosts((prevPosts) => [...prevPosts, newItem]);
		}
	}, []);

	return {
		visiblePost, term, liked, allPosts, filter,
		handleSearch, handleFilterSelect, handleAddPost, handleDeletePost,
		handleToggleImportant, handleToggleLiked,
	};
}
