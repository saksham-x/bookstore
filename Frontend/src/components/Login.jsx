import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        // console.log(data)
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    document.getElementById('my_modal_3').close()
                    toast.success('Successfully Logged in!');
                    setTimeout(() => {

                        window.location.reload()
                        localStorage.setItem("Users", JSON.stringify(res.data.user))
                    }, 2000);

                }


            })
            .catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("error: " + err.response.data.message);
                    setTimeout(() => {

                    }, 3000);

                }
            })
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box  dark:bg-slate-900 dark:text-white">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>

                            <h3 className="font-bold text-lg">Login</h3>
                            {/* Email  */}
                            <div className='mt-4 space-y-2'>
                                <span>Email </span>
                                <br />
                                <input type="email" className='w-80 border rounded-md px-1 py-1' placeholder='Enter your Email' {...register("email", { required: true })} />
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
                                <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Login </button>
                                <p>Not registered ? <Link to={'/signup'} className='text-underline cursor-pointer text-blue-500'>Sign up</Link> </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
