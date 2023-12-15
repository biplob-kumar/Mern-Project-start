import React, { useContext } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';

const SIgnUp = () => {
  const { register,
    handleSubmit,
    watch,
    formState: { errors } }
    = useForm();
  const { createUser, login } = useContext(AuthContext);
  // redirecting to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      // Signed up 
      const user = result.user;
      alert("Account creation successfully done!")
      document.getElementById("my_modal_5").close()
      navigate(from, { replace: true })
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })


  };
  return (
    <div >
      <div className='max:w-md bg-white shadow w-full  mx-auto flex  items-center  justify-center my-20'>
        <div className="modal-action  flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
            <h3 className="font-bold text-lg">  Create a Accouunt !</h3>
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
                <span className="label-text">Password</span>
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
            {/*  login btn  */}
            <div className="form-control mt-6">
              <input type='submit' value="Login" className="btn text-white bg-green border-none" />
            </div>
            <p className="text-center my-2">
              have an account?{" "}
              <Link className="underline text-red ml-1"
                onClick={() => document.getElementById('my_modal_5').showModal()}
              >
                Login

              </Link>{" "}
            </p>
            <Link to='/'
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
            </Link>
          </form>
          {/*  cocial login  */}
          <div className='flex justify-center -mt-5  space-x-3 mb-3'>

            <button className="btn btn-circle btn-outline bg-slate-100 hover:bg-green hover:text-white border-none">
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
        <Modal />
      </div>
    </div>
  )
}

export default SIgnUp