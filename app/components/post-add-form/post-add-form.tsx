import { memo } from "react";

interface PostAddFormProps {
  onAdd: (formData: FormData) => void;
}

function PostAddForm({ onAdd }: PostAddFormProps) {

  return (
    <form action={onAdd}
      className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-gray-100 rounded-md">
      <input name="newpost" className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button type="submit" className="px-4 py-2 bg-gray-300 text-gray-700 cursor-pointer rounded-md hover:bg-gray-400 focus:outline-none">
        Add Post
      </button>
    </form>
  )
}

export default memo(PostAddForm);