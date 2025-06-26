import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className="backdrop-blur-xl shadow-md sticky top-0 z-50 ">
      <div className='navbar container px-4 mx-auto'>
        <div className='flex-1'>
          <NavLink to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src={logo} alt='' />
            <span className='font-bold'>Solo Sphere</span>
          </NavLink>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/jobs'>All Jobs</NavLink>
            </li>

            {!user && (
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            )}
          </ul>

          {user && (
            <div className='dropdown dropdown-end z-50'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to='/add-job' className='justify-between'>
                    Add Job
                  </Link>
                </li>
                <li>
                  <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                </li>
                <li>
                  <Link to='/my-bids'>My Bids</Link>
                </li>
                <li>
                  <Link to='/bid-requests'>Bid Requests</Link>
                </li>
                <li className='mt-2'>
                  <button
                    onClick={logOut}
                    className='bg-red-500 text-white hover:bg-red-500 block text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
