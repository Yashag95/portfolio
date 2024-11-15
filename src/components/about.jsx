import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className=' text-white px= "100px"'
      // style={{ marginBottom: "1px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {" "}
          <p
            className="text-4xl font-bold inline  text-white"
          >
            About
          </p>
          <p
            className="pb-5"
            style={{
              marginTop: "40px",
              fontSize: "20px",
              fontFamily: "revert",
            }}
          >
            "I am Yash Agrawal, a dedicated Full Stack Developer with hands-on experience in creating dynamic web applications and user-friendly interfaces. With a strong background in ReactJS, Node.js, and MySql database, I specialize in building responsive and efficient solutions, integrating APIs, and enhancing data visualization. Passionate about problem-solving and delivering seamless digital experiences, I thrive in collaborative environments leveraging Git and modern development tools."


          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
