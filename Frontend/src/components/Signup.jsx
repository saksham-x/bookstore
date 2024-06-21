import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
// import Login from './Login'

const Signup = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullName: data.fullName,
            email: data.email,
            password: data.password
        }
        // console.log(data)
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Successfully Registered!');
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))

            })
            .catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("error: " + err.response.data.message);
                }
            })
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="h-screen flex items-center justify-center">
                    <div id="my_modal_3" className="h-screen flex items-center justify-center">
                        <div className="dark:bg-slate-900 dark:text-white  rounded-md w-[600px]">
                            <div className="modal-box">
                                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                                    <h3 className="font-bold text-lg">Sign Up</h3>
                                    {/* Name  */}
                                    <div className='mt-4 space-y-2'>
                                        <span>Name </span>
                                        <br />
                                        <input type="text" className='w-80 border rounded-md px-1 py-1' placeholder='Enter your Name ' {...register("fullName", { required: true })} />
                                        {errors.fullName && <span>This field is required</span>}

                                    </div>
                                    {/* Email  */}
                                    <div className='mt-4 space-y-2'>
                                        <span>Email </span>
                                        <br />
                                        <input type="email" className='w-80 border rounded-md px-1 py-1' placeholder='Enter your Email'  {...register("email", { required: true })} />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    {/* Password  */}
                                    <div className='mt-4 space-y-2'>
                                        <span>Password </span>
                                        <br />
                                        <input type="password" className='w-80 border rounded-md px-1 py-1' placeholder='Password' {...register("password", { required: true })} />
                                        {errors.password && <span>This field is required</span>}
                                    </div>
                                    {/* button  */}
                                    <div className='flex justify-around mt-4'>
                                        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Sign Up </button>
                                        <p>Have Account ?
                                            <Link to={'/'} className='text-underline cursor-pointer text-blue-500'> Go back to homepage</Link>
                                            {/* <span className='text-underline cursor-pointer text-blue-500' onClick={() => document.getElementById("my_modal_3").showModal()}> Login </span> */}
                                            {/* <Login /> */}
                                            {/* <button className='text-underline cursor-pointer text-blue-500' onClick={() => document.getElementById("my_modal_3").showModal()}>Login <Login /></button> */}


                                        </p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Signup
