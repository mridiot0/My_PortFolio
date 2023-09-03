import React from "react";


const Experience = () => {
  // const portfolios = [
    
  // ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6"></p>
          <p style={{fontSize: 20}} align="justify">Currently I am increasing my knowledge on web application security. I am continuing my research on OWASP Top 10 which is the global standard for web application security. For the purpose of increasing my knowledge in these fields I've used some hands on vulnerable virtual machines and completed some Capture The Flags (CTF) in this category. This includes:
<ul color="slategray">
                1. DVWA: Damn Vulnerable Web Application (DVWA)
                <br />
                2. Metasploitable 2
                <br />
                3. Hack The Box
                <br />
                4. Kioptrix: Level 1
                <br />
                5. Hacker101 CTF
 </ul>
 </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
