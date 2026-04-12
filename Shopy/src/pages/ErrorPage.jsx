import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router'
import './errorPage.css'
const ErrorPage = () => {
  return (
    <>
    <Header />
    <div className='container'>
        <p className='text'>404 Not found</p>
        <button className='btn'>
            Go back to home
        </button>
    </div>
    </>
  )
}

export default ErrorPage