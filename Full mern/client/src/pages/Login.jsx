import React, { useState } from 'react'
import Contact from "../assets/login.png";
import '../style/login.css'

const Login = () => {


  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...Login,
      [name]: value,
    });
  };

    // handle form on submit
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(Login);
    };

  

  return (
    <section className='bg-dark'>

<main>
        <div className="section-registration">
          <div className="container grid grid-to-cols">
            <div className="regestration-image">
              <img src={Contact} alt="a nurse with a cute look"
                width="450"
                height="500" />
            </div>
            {/* regestration form  */}
            <div className="login-form">
              <h1 className='main-heading mb-3 text-white py-2' >Login  Form </h1>
              <form onSubmit={handleSubmit}  >
 
                  <div className='regisetr-content py-2'>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={Login.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
           
                  <div className='regisetr-content py-2'>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      value={Login.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>

            </div>
          </div>
        </div>
      </main>

    </section>
  )
}

export default Login