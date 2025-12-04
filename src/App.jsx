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



function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  let isLoading = useSelector((state) => state.auth.isLoading)
  let isProfileComplete = useSelector((state) => state.profile.isProfileComplete)
  let isProfileLoading = useSelector((state) => state.profile.isProfileLoading)
  useEffect(() => {

    (async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          console.log(user)
          dispatch(setUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            emailVerified: user?.emailVerified,
            metadata: {
              createdAt: user?.metadata.createdAt,
              lastLoginAt: user?.metadata.lastLoginAt,
            }
          }))
        } else {
          dispatch(clearUser())
        }
      });
    })()



  }, [])

  console.log(user)


  if (isLoading) {
    return (
      <>
        <div className='h-screen w-screen flex justify-center items-center'>

          <div className="grid gap-3">
            <h2
              className="text-4xl font-manrope font-extrabold text-transparent bg-indigo-600  bg-clip-text flex items-center">
              L <div
                className="items-center justify-center rounded-md w-6 h-6 flex bg-indigo-500 animate-spin">
                <div className="h-4 w-4 rounded-md bg-white "></div>
              </div>
              ading...
            </h2>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='h-screen w-screen dark:bg-gray-900/95 bg-slate-100'>
        <div className='min-h-[100dvh] h-[100dvh] w-screen overflow-auto public-sans'>
          {true ?
            <Routes>
              <Route path='/' element={<Dashboard />}>
                <Route index element={<Users />} />
                <Route path='/users' element={<Users />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Profile />} />
              </Route>
              <Route path='/*' element={<Dashboard />} />
            </Routes>
            :
            user ?
              <Routes>
                <Route path='/createprofile' element={<CreateProfile />} />
                <Route path='/*' element={<CreateProfile />} />
              </Routes>
              :
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Rejister />} />
                <Route path='/*' element={<Login />} />
              </Routes>

          }
        </div>
      </div>
    </>
  )
}

export default App
