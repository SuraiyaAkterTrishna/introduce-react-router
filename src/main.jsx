import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home';
import About from './components/About/About';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />
  },
]); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path: "post/:postId",
        element: <PostDetail />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*", 
        element: <div>44444044444</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
