import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx';
import {
  createBrowserRouter, RouterProvider
} from 'react-router'
import { Contact } from './pages/Contact.tsx'
import { About } from './pages/About.tsx'
import { Works } from './pages/Works.tsx'
import { WorkDeteil } from './pages/WorkDeteil.tsx'


const router = createBrowserRouter([
  { path: '/', Component: App },
  { path: '/contact', Component: Contact },
  { path: '/about', Component: About },
  { path: '/works', Component: Works },
  { path: '/works/:workId', Component: WorkDeteil }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>
);
