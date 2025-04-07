import type { Route } from "./+types/home";
import Posts from "~/components/posts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Posts />;
}
