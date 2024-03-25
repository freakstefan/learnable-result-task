import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import User from "./pages/user/User";
import Menu from "./pages/Menu/Menu";
import StudentInfo from "./pages/Menu/StudentInfo";
import Error from "./ui/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/app",
          element: <Menu />,
        },
        {
          path: "/app/studentInfo/:id",
          element: <StudentInfo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
