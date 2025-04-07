import PostListItem from "../post-list-item";
import type { Post } from "~/hooks/usePosts";

interface PostListProps {
  posts: Post[];
  onDelete: (id: string) => void;
  onToggleImportant: (id: string) => void;
  onToggleLiked: (id: string) => void;
}

function PostList({ posts, onDelete, onToggleImportant, onToggleLiked }: PostListProps) {

  return (
    <ul className="space-y-4 p-4 bg-gray-100 rounded-md mt-10">
      {posts.map(item => {
        if (typeof item == "object" && "id" in item) {
          const { id, ...itemProps } = item;
          return (
            <li className="p-4 bg-white rounded-md shadow-md" key={id}>
              <PostListItem {...itemProps} onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                onDelete={() => onDelete(id)} />
            </li>
          );
        }
        return false;
      })}
    </ul>
  )
}

export default PostList;