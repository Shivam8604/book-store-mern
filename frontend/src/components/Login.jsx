/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input {...register("email", { required: true })} type='email' placeholder='Enter your Email' className='w-80 px-3 border-none rounded-md outline-none' />
                        {errors.email && <span>This field is required</span>}

                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input {...register("password", { required: true })} type='password' placeholder='Enter your password' className='w-80 px-3 border-none rounded-md outline-none' />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-500' type='submit'>Login</button>
                        <h5>Not Registerd ?<Link to="/signup" className='underline text-blue-500 cursor-pointer'>SignUp</Link></h5>
                    </div>
                </div>
            </dialog>

        </>
    )
} 

export default Login
