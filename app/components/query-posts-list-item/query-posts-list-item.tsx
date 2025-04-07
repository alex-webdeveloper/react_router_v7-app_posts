import type { QueryPost } from "../query-posts-list";

export default function QueryPostsListItem({ body, title }: QueryPost) {

  return (
    <section className="pt-3">
      <h3 className="text-2xl font-medium mb-3">{title}</h3>
      <p className="text-base">{body}</p>
    </section>
  )
}