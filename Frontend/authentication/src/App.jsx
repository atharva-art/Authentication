import Login from './pages/Login.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )

}

export default App;

