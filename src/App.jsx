import { useEffect, useRef, useState } from 'react'
import './App.css'
import imageCompression from "browser-image-compression";
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, clearUser } from './redux/auth/authSlice';
import Login from './pages/Login';
import Rejister from './pages/Rejister';
import Dashboard from './pages/Dashboard';
import CreateProfile from './pages/CreateProfile';



function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  let isLoading = useSelector((state) => state.auth.isLoading)
  console.log(user)

  useEffect(() => {

    (async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
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
      {user ?
        <div className='h-screen w-screen overflow-auto public-sans'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<Dashboard />} />
          </Routes>
        </div>
        :
        <div className='h-screen w-screen overflow-y-scroll public-sans'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Rejister />} />
            <Route path='/*' element={<Login />} />
            <Route path='/createprofile' element={<CreateProfile/>} />
          </Routes>
        </div>

      }
    </>
  )
}

export default App
