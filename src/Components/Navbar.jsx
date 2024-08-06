import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  const linkActiveClass = ({isActive}) => isActive ? 'activeBg' : 'unActiveBg';

  return (
    <nav>
        <div className="logoContainer">
            <div className="imageContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9W1xTscEcGKYWa8Ksx4eU7mOh-Tyk-uRVvw&s" alt="No_Image" />
            </div>
            <p>React Jobs</p>
        </div>
            <ul className="listItems">
                <li className='homeTab'>
                  <NavLink to='/' className={linkActiveClass} id='linkHover'>Home</NavLink>
                </li>
                <li><NavLink to='/jobs' className={linkActiveClass} id='linkHover'>Jobs</NavLink></li>
                <li><NavLink to='/add-Job' className={linkActiveClass} id='linkHover'>Add Job</NavLink></li>
                <li><NavLink to='/about' className={linkActiveClass} id='linkHover'>About</NavLink></li>
            </ul>
    </nav>
  )
}

export default Navbar