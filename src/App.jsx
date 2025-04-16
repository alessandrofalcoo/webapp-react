import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { GlobalProvider } from './context/GlobalContext'
import Movie from './pages/Movie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <GlobalProvider >
        <BrowserRouter >
          <Routes >
            <Route path='/' Component={Home} />
            <Route path="/:id/movie" Component={Movie} />


          </Routes>
        </BrowserRouter>
        <Header />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
