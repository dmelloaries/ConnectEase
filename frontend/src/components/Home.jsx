import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import homeImage from '../assets/home.png'; 

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4"
      style={{ fontFamily: 'Lato, sans-serif' }}
    >
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <Fade cascade direction="up" duration={500} damping={0.3}>
          <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900">
            Effortlessly Manage Your Contacts
          </h1>

          <br></br>
          <p className="text-lg md:text-xl font-bold text-gray-700">
            Add New Contacts with Ease
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-700">
            Edit Contacts Instantly
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-700">
            Send Contacts to Any Email
          </p>
        </Fade>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <motion.img
          src={homeImage}
          alt="Home"
          className="w-full max-w-sm"
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
}

export default Home;
