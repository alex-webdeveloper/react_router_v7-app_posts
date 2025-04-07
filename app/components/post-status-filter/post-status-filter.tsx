import { memo, useState } from "react";

interface PostStatusFilterProps {
  filter: "all" | "like";
  onFilterSelect: (filter: "all" | "like") => void;
}

interface ButtonProps {
  children: React.ReactNode;
  variant: "info" | "outline-secondary";
  onClick: () => void; 
}

interface PostStatusButton {
  name: "all" | "like";
  label: "All" | "Liked";
}

const statusButton: PostStatusButton[]= [
  { name: "all", label: "All" },
  { name: "like", label: "Liked" }
]

function PostStatusFilter({ filter, onFilterSelect }: PostStatusFilterProps) {
  const [ buttons ] = useState<PostStatusButton[]>(statusButton);

  return (
    <ButtonGroup>
      {buttons.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? "info" : "outline-secondary";
        return (
          <Button key={name} variant={clazz} onClick={() => onFilterSelect(name)}>
            {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

function ButtonGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex space-x-0 rounded-md overflow-hidden">
      {children}
    </div>
  );
}

function Button({ children, variant, onClick }: ButtonProps) {
  const baseClasses = `px-4 py-2 cursor-pointer focus:outline-none border border-transparent first:rounded-l-md last:rounded-r-md`;
  const variantClasses =
    variant === "info"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(PostStatusFilter);