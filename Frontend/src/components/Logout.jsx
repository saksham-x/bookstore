import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handelLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            setTimeout(() => {

                window.location.reload()
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }, 1000);


        } catch (error) {
            toast.error("error: " + error)
        }
    }

    return (
        <div>

            <button className='px-3 py-2 bg-red-500 text-white rounded-sm cursor-pointer'
                onClick={handelLogout}
            >Logout</button>



        </div>
    )
}

export default Logout
