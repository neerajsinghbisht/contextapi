import react,{ useState } from 'react'
import Login from './component/Login'
import Profile from './component/Profile'
import userContextProvider from './context/usercontextprovider'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <userContextProvider>
    <h1>react with me </h1>
    <Login/>
    <Profile/>
    </userContextProvider>
     
    </>
  )
}

export default App
