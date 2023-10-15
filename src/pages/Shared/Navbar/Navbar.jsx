import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error.message)
      })
  }
  const navItem = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/menu'>Menu</Link></li>
    <li> <Link to='/secret'>private</Link></li>
    <li> <Link to='/order/salad'>Order Now</Link></li>

    <li> <Link to='/signup'>Sign up here</Link></li>


  </>
  return (
    <>
      <Helmet>
        <title>order||bistroo-boss</title>
      </Helmet>
      <div className="fixed max-w-screen-xl z-10 navbar p-4 m-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <button onClick={handleLogOut} className='btn-outline btn-ghost'>Logout</button> : <> <Link to='/login'>Login here</Link></>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar