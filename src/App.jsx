import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
    <Layout/>
    <Footer/>

    </>
  )
}

export default App

