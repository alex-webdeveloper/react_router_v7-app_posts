import { usePosts, type Post } from "~/hooks/usePosts";
import { v4 as uuidv4 } from 'uuid';
import PostsHeader from "../posts-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from "styled-components";

const PostsBlockStyled = styled.div`
  background-color: #1e2938d9;
  margin: 0 auto;
  max-width: 800px;
`;
const PostsBlockStyledExtend = styled(PostsBlockStyled)`
  padding: 10px;
`;

const initialState: Post[] = [
  { label: "Going to learn React", important: true, like: false, id: uuidv4() },
  { label: "That is so good", important: false, like: false, id: uuidv4() },
  { label: "I need a break...", important: false, like: false, id: uuidv4() }
];

export default function Posts() {
  const { visiblePost, term, liked, allPosts, filter,
    handleSearch, handleFilterSelect,
    handleAddPost, handleDeletePost, handleToggleImportant, handleToggleLiked
  } = usePosts(initialState);

  return (
    <PostsBlockStyledExtend>
      <PostsHeader liked={liked} allPosts={allPosts} />
      <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md max-w-md w-full mx-auto">
        <SearchPanel onChange={handleSearch} term={term} />
        <PostStatusFilter filter={filter} onFilterSelect={handleFilterSelect} />
      </div>
      <PostList posts={visiblePost} onDelete={handleDeletePost}
        onToggleImportant={handleToggleImportant} onToggleLiked={handleToggleLiked} />
      <PostAddForm onAdd={handleAddPost} />
    </PostsBlockStyledExtend>
  );
}