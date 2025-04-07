import { useEffect, useState } from "react";
import { fetchDataWithCache, type QueryPost } from "~/lib/data";
import QueryPostsListItem from "../query-posts-list-item";
import {Spinner} from "../spinner";

const url: string = 'https://api.openjavascript.info/get';

export default function QueryPostsList() {
  const [data, setData] = useState<QueryPost[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    fetchDataWithCache(url)
      .then(data => {
        if (!ignore) setData(data);
      })
      .catch(setError);
    
    return () => {
      ignore = true;
    }
  }, []);

  if (error) return <h2 className="pt-16 text-center text-red-800">Error: {error.message}</h2>;
  if (!data) return <Spinner/>;

  const tinyData: QueryPost[] = data.slice(0, 10);
  
  return (
    <div className="mx-auto max-w-[800px]">
      <h2 className="text-center mb-5 text-3xl font-bold">Query posts</h2>
      {tinyData.map(post =>
        <QueryPostsListItem key={post.postId} {...post} />
      )
      }
      </div>
  )
}