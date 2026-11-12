import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home';
import {
  createBrowserRouter, RouterProvider
} from 'react-router'
import { Navigate } from 'react-router'
import { WorkDeteil } from './pages/WorkDeteil'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'

console.log("test")

const router = createBrowserRouter([
  { path: '/', Component: Home },
  // 旧Aboutページはトップの About セクションへ転送（pages/About.tsx は残してある）
  { path: '/about', element: <Navigate to={{ pathname: '/', hash: '#about' }} replace /> },
  { path: '/works/:workId', Component: WorkDeteil },
  { path: '/blog', Component: Blog },
  { path: '/blog/:id', Component: BlogPost }

], {
  basename: '/'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>
);


