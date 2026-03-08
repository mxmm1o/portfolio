import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { About } from './pages/About';
import { WorkDeteil } from './pages/WorkDeteil';
const router = createBrowserRouter([
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/works/:workId', Component: WorkDeteil }
], {
    basename: '/portfolio'
});
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
