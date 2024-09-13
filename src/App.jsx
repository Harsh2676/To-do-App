import React from 'react'
import './App.css'
import TodoApp from './Components/TodoApp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='container' >
      <h1 className="heading">
        Made By <span><a href="https://harsh-react-portfolio.vercel.app/">Harsh Bharadiya</a></span>
      </h1>
      <TodoApp />
      <ToastContainer
      className="toast-container"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        // pauseOnHover
        theme="dark"
        />
    </div>
  )
}

export default App
