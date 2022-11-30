import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import JavaImage from "../assets/java.png";
import Bash from "../assets/bash.png";
import Networking from "../assets/network.png";
import Github from "../assets/github.png";
import Python from "../assets/python.png";
import CyberSecurity from "../assets/cyber.jpeg";
import Golang from "../assets/gol.png";
import CLang from "../assets/c.png";

const Experience = () => {
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
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: JavaImage,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 5,
      src: Bash,
      title: "Bash",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: Networking,
      title: "Networking",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: Github,
      title: "Github",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: Python,
      title: "Python",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: CyberSecurity,
      title: "Cyber Security",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: Golang,
      title: "Golang",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: CLang,
      title: "CLang",
      style: "shadow-cyan-400",
    },
  ];

  return (
    <div id="exp"
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
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
<br />

export default Experience;
