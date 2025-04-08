import { type RouteConfig, index, route , prefix} from "@react-router/dev/routes";

export default prefix("react_router_v7-app_posts", [
  index("routes/home.tsx"),
  route("query-posts", "routes/query-posts.tsx"),
  route("send-data", "routes/send-data.tsx")
]) satisfies RouteConfig;
