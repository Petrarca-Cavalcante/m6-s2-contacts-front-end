// import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RoutesApp } from './router'
import { GlobalStyle } from './styles/global'
import "react-toastify"


function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={true}
      />
      <RoutesApp />
      <GlobalStyle />
    </>
  )
}

export default App
