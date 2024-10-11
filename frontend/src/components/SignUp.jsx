/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='flex h-screen items-center justify-center border shadow-sm'>
      <div id="my_modal_3 px-5 py-5 w-[600px]">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">SignUp</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br/>
                        <input type='email' placeholder='Enter your Email' className='w-80 px-3 border-none rounded-md outline-none' />
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br/>
                        <input type='password' placeholder='Enter your password' className='w-80 px-3 border-none rounded-md outline-none' />
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-500'>SignUp</button>
                        <p >Have an Account ?<Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link></p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default SignUp
