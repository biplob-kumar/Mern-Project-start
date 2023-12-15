import React, { useContext, useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
const Modal = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors } }
        = useForm();

    const { signUpWithGmail, login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    // redirecting to home page or specifig page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            alert("Login successfull");
            document.getElementById("my_modal_5").close()
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(" Provide a correct email and password ")
        })
    };

    // google signin
    const handleLogin = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            alert("Login successfull!")
            navigate(from, { replace: true })
        }).catch((error) => console.log(error))
    }


    

    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
            <div className="modal-box bg-white">
                <div className="modal-action  flex flex-col justify-center mt-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                        <h3 className="font-bold text-lg">Please Login!</h3>
                        {/*  email */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered bg-white focus:border-none"
                                required {...register("email")}
                            />
                        </div>
                        {/*  password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered bg-white focus:border-none"
                                required {...register("password")}
                            />
                            <label className="label mt-2 ">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/*  error text  */}
                        {
                            errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
                        }

                        {/*  login btn  */}
                        <div className="form-control mt-6">
                            <input type='submit' value="Login" className="btn text-white bg-green border-none" />
                        </div>
                        <p className="text-center my-2">
                            Do not have an account?{" "}
                            <Link to="/signup" className="underline text-red ml-1">
                                Signup Now
                            </Link>{" "}
                        </p>

                        <button
                            htmlFor="my_modal_5"
                            onClick={() => document.getElementById("my_modal_5").close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                        </button>
                    </form>
                    {/*  cocial login  */}
                    <div className='flex justify-center -mt-5  space-x-3 mb-3'>

                        <button className="btn btn-circle btn-outline bg-slate-100 hover:bg-green hover:text-white border-none" onClick={handleLogin}>
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle btn-outline bg-slate-100 hover:bg-green hover:text-white border-none">
                            <FaFacebook />
                        </button>
                        <button className="btn btn-circle btn-outline bg-slate-100 hover:bg-green hover:text-white border-none">
                            <FaGithub />
                        </button>

                    </div>

                </div>
            </div>
        </dialog>
    )
}

export default Modal