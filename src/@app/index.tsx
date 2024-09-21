import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/normalize.scss';
import MainPage from '@pages/main';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainPage />,
    },
  ],
  {
    basename: '/language-map-maker',
  },
);

export default function App() {
  return <RouterProvider router={router} />;
}
