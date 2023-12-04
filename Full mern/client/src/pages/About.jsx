import React from 'react'
import Heoimg from "../assets/images/home.png";
import { Link } from 'react-router-dom';
import Analyticks from '../components/Analyticks';
const About = () => {
  return (
<main>
  <section className='section-hero bg-dark py-5'>
          <div className="container grid grid-two-cols">
          <div className="hero-content text-white">
              <p>We are the World Best IT Company</p>
              <h1 className='py-2' > Why  Chose US  </h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione magni eius ipsa vel?</p><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione magni eius ipsa vel?</p><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione magni eius ipsa vel?</p><br />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione magni eius ipsa vel?</p><br />

              <div className="bt">
                  <Link> <button className='btn'> Contact Now </button> </Link>
                
                  <Link> <button className='btn secundary-btn'> Lern More</button> </Link>
                
              </div>
            </div>
            <div className="hero-img">
            <img
                src= {Heoimg}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
  </section>
  <Analyticks/>
</main>
  )
}

export default About