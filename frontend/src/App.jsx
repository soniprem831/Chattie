import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Login from './components/pages/login/Login'
// import SignUp from './components/pages/signup/Signup'
import Home from './components/pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='p-4 h-screen flex items-center justify-center'>
    {/* <Login/> */}
    {/* <SignUp/> */}
    <Home/>
  </div>
  )
}

export default App
