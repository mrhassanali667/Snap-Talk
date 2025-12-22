import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase/firebaseConfig.js';
import { onAuthStateChanged } from "firebase/auth";
import { setUser, clearUser } from './redux/auth/authSlice';
import Login from './pages/Login';
import Rejister from './pages/Rejister';
import Dashboard from './pages/Dashboard';
import CreateProfile from './pages/CreateProfile';
import NotFound from './pages/NotFound';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { checkIsProfileComplete, setCurrentUserID, setIsProfileLoading } from './redux/Profile/profileSlice.js';
import { useQuery } from '@tanstack/react-query';
import Users from './components/layout/Users.jsx';
import Contacts from './components/layout/Contacts.jsx';
import Settings from './components/layout/Settings.jsx';
import Profile from './components/layout/Profile.jsx';
import Groups from './components/layout/Groups.jsx';
import axios from 'axios';



function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  const { data: userData, error: userError, isLoading, } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(`https://snap-talk-backend-server.vercel.app/api/auth/user`, { withCredentials: true });
      return res.data.user;
    },
    retry: 0,
  });

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    } else {
      dispatch(clearUser());
    }
  }, [userData, dispatch]);

  console.log("Current user from Redux store:", userData);
  console.log("Current user error:", userError);

  if (isLoading) {
    return (
      <>
        <div className='h-screen w-screen bg-white dark:bg-gray-900 flex justify-center items-center'>
          <div className="loader"></div>
        </div>  
      </>
    )
  }

  return (
    <>
      <div className='h-screen w-screen dark:bg-gray-900/95 bg-slate-100'>
        <div className='min-h-[100dvh] h-[100dvh] w-screen overflow-auto public-sans '>
          {true ?
            <Routes>
              <Route path='/' element={<Dashboard />}>
                <Route index element={<Users />} />
                <Route path='/users' element={<Users />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/*' element={<Users />} />
              </Route>
              <Route path='/*' element={<Dashboard />} />
            </Routes>
            :
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Rejister />} />
              <Route path='/create-profile' element={<CreateProfile />} />
              <Route path='/*' element={<Login />} />
            </Routes>

          }
        </div>
      </div>
    </>
  )
}

export default App
