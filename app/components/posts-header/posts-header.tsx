import { memo } from "react";
import styled from "styled-components";

interface HeaderStyledProps {
  $colored?: boolean;
}
const PostsHeaderStyled = styled.div<HeaderStyledProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {

    font-size: 26px;
    font-weight: medium;
    color: ${props => props.$colored ? 'darkblue' : 'gray'};
    &:hover {
      color: blue;
    }
  }
  span {
    font-size: 1.2rem;
    color: grey;
}`;

interface PostsHeaderProps {
  liked: number;
  allPosts: number;
}

function PostsHeader({ liked, allPosts }: PostsHeaderProps) {

  return (
    <PostsHeaderStyled $colored>
      <h2>Alex developer</h2>
      <span>{allPosts} entries, {liked} liked them</span>
    </PostsHeaderStyled>
  )
 }
 export default memo(PostsHeader);