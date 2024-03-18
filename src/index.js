import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import SignUp from './components/SignUp';
import Header from './components/Header';

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter ([
  {
    path : '/', 
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/signup', 
        element : <SignUp/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
 
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
