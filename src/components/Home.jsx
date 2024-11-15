import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h5 className="text-4xl font-bold text-white">
            <h1 style={{fontSize: "50px", marginBottom: "5px"}}>Hey,</h1>
            My name is Yash Agrawal.
            <br />
            <Typewriter
              words={["I am a MERN Stack Developer.."]}
              loop={100}
              cursor
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h5>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl w-2/3 md:w-[85%]"
            style={{
              borderRadius: "10%",
              padding: "20px",
              marginTop: "5rem", // Adjust as needed
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
