import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/pngwing.png";
import github from "../assets/github.png";
import expressjs from "../assets/expressjs.png";
import mysql from "../assets/Mysql2.png" 
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: mongo,
      title: "MongoDB",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "Git & Github",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: expressjs,
      title: "Expressjs",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mysql,
      title: "Mysql",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="w-full h-screen" >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" >
        <div style={{marginTop: "100px"}}>
          <p className="text-4xl font-bold  border-gray-500 p-2 inline" style= {{marginTop: "10px"}}>
            Skills 
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0" style={{marginBottom: "10px"}}>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Skills;