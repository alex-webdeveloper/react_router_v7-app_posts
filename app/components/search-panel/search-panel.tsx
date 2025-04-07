import { memo } from "react";

interface SearchPanelProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  term: string;
}

function SearchPanel({ onChange, term }: SearchPanelProps) {

  return (
    <input
      type="text"
      value={term}
      className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
      placeholder="Search by entries"
      onChange={onChange}
    />
  )
};

export default memo(SearchPanel);