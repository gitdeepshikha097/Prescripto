import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 md:py-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img 
        className='w-44 cursor-pointer' 
        src={assets.logo} 
        alt="Logo" 
        onClick={() => navigate('/')} 
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to='/' className='py-1 hover:text-primary'>
          <li>HOME</li>
        </NavLink>
        <NavLink to='/doctors' className='py-1 hover:text-primary'>
          <li>ALL DOCTORS</li>
        </NavLink>
        <NavLink to='/about' className='py-1 hover:text-primary'>
          <li>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className='py-1 hover:text-primary'>
          <li>CONTACT</li>
        </NavLink>
      </ul>

      {/* Profile and Mobile Menu Icon */}
      <div 
        className={`flex items-center gap-4 transition-transform duration-300 ${
          showMenu ? 'translate-x-2' : 'translate-x-0'
        } md:translate-x-0`}
      >
        {token ? (
          <div className='relative flex items-center gap-2 cursor-pointer group'>
            <img 
              onClick={() => navigate('/')} 
              className='w-8 rounded-full' 
              src={assets.profile_pic} 
              alt="Profile" 
            />
            <img 
              className='w-2.5' 
              src={assets.dropdown_icon} 
              alt="Dropdown" 
            />
            {/* Profile Dropdown */}
            <div className='absolute top-12 right-0 pt-2 hidden group-hover:block z-20'>
              <div className='min-w-[150px] bg-white rounded shadow-lg flex flex-col gap-2 p-3'>
                <p 
                  onClick={() => navigate('my-profile')} 
                  className='hover:text-primary cursor-pointer'
                >
                  My Profile
                </p>
                <p 
                  onClick={() => navigate('my-appointments')} 
                  className='hover:text-primary cursor-pointer'
                >
                  My Appointments
                </p>
                <p 
                  onClick={() => setToken(false)} 
                  className='hover:text-primary cursor-pointer'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/Login')} 
            className='bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block'
          >
            Create account
          </button>
        )}
        <img 
          onClick={() => setShowMenu(true)} 
          className='w-6 md:hidden cursor-pointer' 
          src={assets.menu_icon} 
          alt="Menu" 
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='fixed inset-0 bg-white z-30 md:hidden'>
          <div className='flex items-center justify-between px-5 py-6 border-b'>
            <img 
              className='w-36 cursor-pointer' 
              src={assets.logo} 
              alt="Logo" 
              onClick={() => {
                navigate('/');
                setShowMenu(false);
              }}
            />
            <img 
              className='w-7 cursor-pointer' 
              src={assets.cross_icon} 
              alt="Close Menu" 
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className='flex flex-col items-center gap-5 mt-10 px-5 text-lg font-medium'>
            <NavLink 
              to='/' 
              onClick={() => setShowMenu(false)} 
              className='w-full text-center py-2 hover:text-primary'
            >
              Home
            </NavLink>
            <NavLink 
              to='/doctors' 
              onClick={() => setShowMenu(false)} 
              className='w-full text-center py-2 hover:text-primary'
            >
              All Doctors
            </NavLink>
            <NavLink 
              to='/about' 
              onClick={() => setShowMenu(false)} 
              className='w-full text-center py-2 hover:text-primary'
            >
              About
            </NavLink>
            <NavLink 
              to='/contact' 
              onClick={() => setShowMenu(false)} 
              className='w-full text-center py-2 hover:text-primary'
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
