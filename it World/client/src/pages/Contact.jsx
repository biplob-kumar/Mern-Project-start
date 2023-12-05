import React, { useState } from 'react'
import '../style/contact.css'
import contactImg from "../assets/contact.png";
const Contact = () => {


  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };



  return (
    <section className='bg-dark py-5'>
      <main>
        <div className="section-registration">
        <div class="section-title ">
                    <h2 className='text-white'> Contact Us </h2>
                    <p className='text-white' >I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
                </div>
          <div className="container grid grid-to-cols ">
            
            <div className="regestration-image">
              <img src={contactImg} alt="a nurse with a cute look"
                width="450"
                height="500" />
            </div>
            {/* regestration form  */}
            <div className="regestration-form">

              <form onSubmit={handleSubmit}  >
                  <div className='regisetr-content py-1'>
                  <h1 className='text-white' > Contact Form </h1>
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div className='regisetr-content py-2'>
           
                  <label htmlFor="message">message</label>
                  <br />
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>


                  </div>
            
                  <button type="submit" className="btn btn-submit">
                  Submit Now
                  </button>
                </form>

            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Contact