
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from './utils/applayout';
import HomePage from './pages/home';

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
