import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home';
import {
  createBrowserRouter, RouterProvider
} from 'react-router'
import { About } from './pages/About'
import { WorkDeteil } from './pages/WorkDeteil'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'

console.log("test")

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/about', Component: About },
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


