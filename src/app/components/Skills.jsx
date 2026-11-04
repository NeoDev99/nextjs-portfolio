"use client";
import React from "react";

const Skills = () => {
  return (
    <div className="skills-container mt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 pb-40">
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-html5 text-5xl mb-2 text-yellow-500"></i>
          <p className="text-white">HTML</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-css3-alt text-5xl mb-2 text-blue-500"></i>
          <p className="text-white">CSS</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-js-square text-5xl mb-2 text-yellow-500"></i>
          <p className="text-white">JavaScript</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-react text-5xl mb-2 text-blue-300"></i>
          <p className="text-white">React</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-node-js text-5xl mb-2 text-green-500"></i>
          <p className="text-white">Node.js</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <i className="fab fa-python text-5xl mb-2 text-yellow-500"></i>
          <p className="text-white">Python</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
