import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5" align="justify">
          Allow me to introduce myself, I am Koushik, a passionate cyber security student driven by a profound interest in protecting digital systems and information.
          As a student, I eagerly explore various aspects of this fascinating discipline, including Network Security, Bug Bounty, Ethical Hacking, and CTF. I believe in the power of hands-on experience and actively seek opportunities to apply theoretical concepts in real-world scenarios. Through engaging in various CTF's, I continuously improving my skills in analyzing vulnerabilities, devising effective mitigation strategies.
        </p>

        <br />

        <p className="text-xl" align="justify">
         My dedication extends beyond the classroom. I actively participate in cyber security competitions, write ups and conferences to immerse myself in the latest industry trends and technologies. By staying updated with the rapidly evolving cyber threat landscape, I ensure that I am well-prepared to adapt to new challenges and devise innovative solutions.
         With my knowledge, enthusiasm, and a continuous thirst for growth, I am determined to make a significant impact as a cyber security professional, ensuring the integrity, confidentiality, and availability of critical information.
        </p>
      </div>
    </div>
  );
};

export default About;
