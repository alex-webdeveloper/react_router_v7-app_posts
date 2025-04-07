import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("query-posts", "routes/query-posts.tsx"),
  route("send-data", "routes/send-data.tsx")
] satisfies RouteConfig;
