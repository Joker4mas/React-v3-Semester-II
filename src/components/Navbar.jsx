// import React from 'react'
import { Link,NavLink }  from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar '>
        <div className='flex flex-row my-4 p-1 justify-between  '>
        <h1 className='text-3xl font-bold '>Jo<span className='text-red-400'>ker</span>4<span className='text-blue-400'>mas</span> &#x1F921;</h1>

          <ul className='flex gap-4 mr-4'>
            <NavLink>
              <Link to='/' className='font-bold'>Home</Link>
            </NavLink>
            <NavLink>
              <Link to='/about' className='font-bold'>About</Link>
            </NavLink>
            <NavLink>
              <Link to='/contact' className='font-bold'>Contact</Link>
            </NavLink>
            <NavLink>
              <Link to='/login' className='font-bold'>404 page</Link>
            </NavLink>
          </ul>
        </div>
        <hr />
      
    </div>
  )
}

export default Navbar
