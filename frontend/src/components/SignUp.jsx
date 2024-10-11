/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";


const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);


    return (
        <div className='flex h-screen items-center justify-center border shadow-sm'>
            <div id="my_modal_3 px-5 py-5 w-[800px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">SignUp</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input {...register("name", { required: true })} type='text' placeholder='Enter your Name' className='w-80 px-3 border-none rounded-md outline-none' />
                            {errors.name && <span>This field is required</span>}
                        </div>
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
                            <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-500' type='submit'>SignUp</button>
                            <h5 className='text-xl'>Have an Account ?<button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()} >Login</button><Login /></h5>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignUp
