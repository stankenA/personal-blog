import AboutPage from "../pages/AboutPage";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import PostIdPage from "../pages/PostIdPage";
import PostPage from "../pages/PostPage";

export const privateRoutes = [
  { path: '/home', component: <PostPage />, exact: true },
  { path: '/posts/:id', component: <PostIdPage />, exact: true },
  { path: '/about', component: <AboutPage />, exact: true },
  { path: '*', component: <PageNotFound />, exact: true },
]

export const publicRoutes = [
  { path: '/login', component: <Login />, exact: true },
]
