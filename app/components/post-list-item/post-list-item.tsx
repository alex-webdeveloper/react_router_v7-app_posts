import styled from "styled-components";

interface PostListItemProps {
  label: string;
  important: boolean;
  like: boolean;
  onDelete: () => void;
  onToggleImportant: () => void;
  onToggleLiked: () => void;
}

const StyledPostListItem = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;

  &.important .app-list-item-label {
    color: #ffd700;
  }

  &.important .btn-star {
    color: #aeaeae;
  }

  &.like .bi-heart-fill {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const StyledLabel = styled.span`
  display: block;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all;
`;
const StyledActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  box-shadow: 1px 1px 4px 1px #f2ebeb;

  &:focus {
    box-shadow: none;
  }
`;
const StyledStarButton = styled(StyledButton)`
  color: #ffd700;
`;
const StyledTrashButton = styled(StyledButton)`
  color: red;
`;
const StyledHeartIcon = styled.i`
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: red;
  transition: 0.3s all;
  transform: translateX(30px);
  opacity: 0;
`;
const StyledHeartIconMuted = styled.i`
  padding-left: 10px;
  color: rgba(43, 43, 43, 0.094);
  opacity: 1;
`;

export default function PostListItem({ label, important, like,
  onDelete, onToggleImportant, onToggleLiked }
  : PostListItemProps
) {
  let classNames: string = "";
  if (important) classNames += " important";
  if (like) classNames += " like";

  return (
    <StyledPostListItem className={classNames}>
      <StyledLabel className="app-list-item-label" onClick={onToggleLiked}>
        {label}
        <StyledHeartIconMuted className="bi bi-heart-fill" />
      </StyledLabel>
      <StyledActions>
        <StyledStarButton className="btn-star" type="button" onClick={onToggleImportant}>
          <i className="bi bi-star"></i>
        </StyledStarButton>
        <StyledTrashButton type="button" onClick={onDelete}>
          <i className="bi bi-trash"></i>
        </StyledTrashButton>
        <StyledHeartIcon className="bi bi-heart-fill" />
      </StyledActions>
    </StyledPostListItem>
  )
}