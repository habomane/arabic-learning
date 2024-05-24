
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from './utils/applayout';
import HomePage from './pages/home';
import ResourcesPage from "./pages/resources";
import LevelsPage from "./pages/levels";
import LevelPage from "./pages/level";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/levels", element: <LevelsPage /> },
      { path: "/resources", element: <ResourcesPage /> },
      { path: "/level/:id", element: <LevelPage /> }
    ]
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
