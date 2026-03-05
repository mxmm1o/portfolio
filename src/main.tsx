import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Home';
import {
  createBrowserRouter, RouterProvider
} from 'react-router'
import { About } from './pages/About.tsx'
import { WorkDeteil } from './pages/WorkDeteil.tsx'


const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/about', Component: About },
  { path: '/works/:workId', Component: WorkDeteil }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>
);


