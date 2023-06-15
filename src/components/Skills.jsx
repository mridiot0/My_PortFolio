import React from "react";

import Bash from "../assets/bash.png";
import Networking from "../assets/network.png";
import Python from "../assets/python.png";
import CyberSecurity from "../assets/cyber.jpeg";
import Linux from "../assets/tux.png";

const Skills = () => {
  const techs = [  
    {
      id: 1,
      src: Bash,
      title: "Bash",
      style: "shadow-pink-400",
    },
    {
      id: 2,
      src: Networking,
      title: "Networking",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: Python,
      title: "Python",
      style: "shadow-orange-400",
    },
    {
      id: 4,
      src: CyberSecurity,
      title: "Cyber Security",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: Linux,
      title: "Linux",
      style: "shadow-cyan-400",
    },
    
    
  ];

  return (
    <div id="skill"
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies that I've experience</p>
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

export default Skills;
