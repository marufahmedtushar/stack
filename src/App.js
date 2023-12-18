import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import Users from './components/Users/Users';
import Main from './layout/Main';
import PrivateRoute from './routes/PrivateRoute';
function App() {
  const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[

    {
      path:'/',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },{
      path:'login',
      element:<SignIn></SignIn>
    },{
      path:'register',
      element:<SignUp></SignUp>
    },{
      path:'users',
      element:<PrivateRoute><Users></Users></PrivateRoute>
    }
    ]
  }

    ])
  return (
    <div >
  
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;