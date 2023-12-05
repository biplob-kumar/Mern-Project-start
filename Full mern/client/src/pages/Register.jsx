import React, { useState } from 'react'
import Contact from "../assets/register.png";
import '../style/Regeister.css'
const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

    // handle form on submit
    const handleSubmit = async  (e) => {
      e.preventDefault();
      console.log(user);

      try {
        
   
      const response =  await fetch(`http://localhost:5000/api/auth/register`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)

      });

      console.log(response)

    } catch (error) {
         console.log( "register", error)
    }

    };


  return (
    <section className='bg-dark'>
      <main>
        <div className="section-registration">
          <div className="container grid grid-to-cols ">
            <div className="regestration-image">
              <img src={Contact} alt="a nurse with a cute look"
                width="450"
                height="500" />
            </div>
            {/* regestration form  */}
            <div className="regestration-form">
              <h1 className='main-heading mb-3 text-white py-2' >Register  Form </h1>
              <form onSubmit={handleSubmit} >
                  <div className='regisetr-content py-1'>
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  
                  <div className='regisetr-content py-2'>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div className='regisetr-content py-2'>
                    <label htmlFor="phone">Phone:</label>
                    <br />
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className='regisetr-content py-2'>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      value={user.password}
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

export default Register