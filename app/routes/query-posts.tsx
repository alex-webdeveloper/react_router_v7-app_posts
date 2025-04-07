import type { Route } from "./+types/query-posts";
import QueryPostsList from "~/components/query-posts-list";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Query Posts" },
    { name: "description", content: "Query Posts examples" },
  ];
}

export default function QueryPosts() {

  return (
      <QueryPostsList />
  )
}