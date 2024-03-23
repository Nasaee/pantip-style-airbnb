import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PostQuestion from './pages/PostQuestion';
import Community from './pages/Community';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/post-question',
          element: <PostQuestion />,
        },
        {
          path: '/community',
          element: <Community />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/' />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
