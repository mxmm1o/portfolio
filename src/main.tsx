import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import {
  createBrowserRouter, RouterProvider
} from 'react-router'
import { Contact } from './Contact'
import { About } from './About'
import { Works } from './Works'
import { WorkDeteil } from './WorkDeteil'


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
