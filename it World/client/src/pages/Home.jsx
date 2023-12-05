import React from 'react'
import { Link } from "react-router-dom";
import '../style/home.css'
import Heoimg from "../assets/images/home.png";

import Service from './Service';
import Contact from './Contact';
import Analyticks from '../components/Analyticks';
const Home = () => {
  return (
    <div>

      <main>
        <section className='section-hero bg-dark' >
          <div className="container grid home-container">
            <div className="hero-content text-white"   >
              <p>We are the World Best iT Company</p>
              <h1 className='py-2' >Wellcome to it World </h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="bt">
                <Link to='/contact' > <button className='btn'> Contact Now </button> </Link>

                <Link> <button className='btn secundary-btn'> Lern More</button> </Link>

              </div>
            </div>
            <div className="hero-img" >
              <img
                src={Heoimg}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/*  2nd analyticks  */}
      <Analyticks />
      <Service />

      {/*  3rd section  */}
      <section className='section-hero bg-dark'>
        <div class="section-title ">
          <h2 className='text-white'>Get Started</h2>
          <p className='text-white' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur  <br />repellendus tempora cum velit deleniti? Praesentium reprehenderit autem minus nisi architecto?</p>
        </div>
        <div className="container grid grid-two-cols">


          <div className="hero-img">
            <img
              src={Heoimg}
              alt="coding together"
              width="400"
              height="500"
            />
          </div>



          <div className="hero-content text-white ">
            <p>We are here to help you</p>
            <h1 className='py-2'>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="bt">
              <Link to='/contact'  > <button className='btn'> Contact Now </button> </Link>

              <Link> <button className='btn secundary-btn'> Lern More</button> </Link>

            </div>
          </div>

        </div>
        <Contact />
      </section>



    </div>
  )
}

export default Home