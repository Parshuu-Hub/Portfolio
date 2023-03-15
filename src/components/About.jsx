import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi! there, this is Praveen Mishra.<br />    
          Currently, I'm pursuing MCA from Pondicherry University.
          
        </p>

        <br />

        <p className="text-xl">
          Since childhood, I have keen interest in Computers.<br />
          I used to play video games and I always wonder that how the system work.<br />
          Now, by learning, I came to know little bit that how the system work.<br />
          I love to learn and work with new technologies and frameworks.<br />
          Through learning, I have realised that frontend development involves a lot of creativity and learnings.<br />
          It excites me a lot that's why I build this portfolio website. And I'm looking my future in it.    
        </p>
      </div>
    </div>
  );
};

export default About;
