import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import PostIdPage from "../pages/PostIdPage";
import PostPage from "../pages/PostPage";

export const routes = [
  { path: '/posts', component: <PostPage />, exact: true },
  { path: '/posts/:id', component: <PostIdPage />, exact: true },
  { path: '/about', component: <AboutPage />, exact: true },
  { path: '*', component: <PageNotFound />, exact: true },
]
