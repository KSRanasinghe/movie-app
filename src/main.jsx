import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import BrowseMovies from './pages/BrowseMovies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/browse-movies",
    element: <BrowseMovies />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
