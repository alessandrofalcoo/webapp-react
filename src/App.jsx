import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { GlobalProvider } from './context/GlobalContext'


function App() {

  return (
    <>
      <GlobalProvider >
        <Header />
        <Main />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
