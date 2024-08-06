import React from 'react'
import {Link} from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <>
        <div className='notFoundPageContainer'>
            <p className="notFoundIcond"><FaExclamationTriangle /></p>
            <h1>404 Not Found</h1>
            <p>This Page does not exist</p>
            <button><Link to="/" className='goBackBtn'>Go To Home</Link></button>
        </div>
    </>
  )
}

export default NotFoundPage