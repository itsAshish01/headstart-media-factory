import React from 'react';
import Vector from '../imgs/vector.png';
import Logo from '../imgs/logo.png';

const Login = () => {
  return (
    <div className='flex'>
      <div className='lg:bg-white h-screen w-1/2 flex flex-col justify-center items-center'>
        <div className='w-max'>
          <img
            src={Logo}
            className='w-52 -ml-2'
            alt='Headstart Media Factory logo'
          />
          <h2 className='text-2xl font-bold'>Login</h2>
          <p className='text-sm mt-1'>
            Please login with the credentials provided to you.
          </p>

          <form className='mt-9'>
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-medium'>
                Email*
              </label>
              <input
                type='text'
                placeholder='yourname@headstart.in'
                className='text-gray-600 text-md mt-2 border rounded-full border-gray-500 px-4 py-2.5 focus:outline-none focus:ring-red-800 focus:border-red-800 focus:z-10'
                id='email'
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor='email' className='font-medium'>
                Password*
              </label>
              <input
                type='text'
                placeholder='Min. 8 characters'
                className='text-gray-600 text-md mt-2 border rounded-full border-gray-500 px-4 py-2.5 focus:outline-none focus:ring-red-700 focus:border-red-700 focus:z-10'
                id='email'
              />
            </div>
            <a
              href='/'
              className='font-medium text-red-800 block mt-2.5 text-right'
            >
              Forgot Password?
            </a>
            <button className='bg-red-800 w-full text-white font-semibold px-4 py-2.5 rounded-full mt-5 hover:bg-red-900'>
              Login
            </button>
            <p className='mt-5'>
              Need credentials?&nbsp;
              <a href='/' className='font-medium text-red-800'>
                Chat with us Now!
              </a>
            </p>
          </form>
        </div>
        <span className='text-sm text-gray-400 mt-10 translate-y-16'>
          Copyright © 2022 Headstart Network Foundation. All rights reserved.
        </span>
      </div>

      <div className='flex flex-col items-center justify-center w-1/2'>
        <img src={Vector} className='w-2/3' alt='Some social media icons.' />
        <p className='font-semibold text-2xl text-center text-white'>
          Turn your ideas <br /> into reality.
        </p>
        <p className='mt-1 text-white'>
          A place for all your media needs at Headstart.
        </p>
      </div>
    </div>
  );
};

export default Login;
