import { useEffect, useRef, useState } from 'react'
import './App.css'
import imageCompression from "browser-image-compression";
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, clearUser } from './redux/Auth/authSlice';
import Login from './pages/Login';
import Rejister from './pages/Rejister';



function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
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
              lastLoginAt: user?.metadata.lastLoginAt,
            }
          }))
        } else {
          dispatch(clearUser())
        }
      });
    })()


  }, [])

  return (
    <>
      {user ?
        <div className='h-screen w-screen overflow-auto public-sans'>
          {/* <Routes> */}
          {/* <Route path='/' element={<Chat />} /> */}
          {/* </Routes> */}
        </div>
        :
        <div className='h-screen w-screen overflow-auto public-sans'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/rejister' element={<Rejister/>}/>
            <Route path='/*' element={<Login/>}/>
          </Routes>
        </div>

      }
    </>
  )
}

export default App
