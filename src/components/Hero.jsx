import React from 'react'
import classes from '../modules/Hero.module.css'
import Arrow from '../assets/arrow.svg'

const Hero = () => {
  return (
     <section className={classes["hero-section"]}>
        <div>

        </div>
        <div className={classes["hero-content"]}>
            <div className={classes["hero-text"]}>
                <h1>Company’s First <br /> Service Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
                <button>See More <img src={Arrow} alt="" /></button>
            </div>

        </div>
    </section>
  )
}

export default Hero