import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-white">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-left md:text-left mb-16 md:mb-0 items-center text-center">
          <h1>Hi, I'm Ijeoma.</h1>
          <p className="mb-8 leading-relaxed">
            I am enthusiastic about collaborating on innovative projects and
            leveraging my technical acumen to bring ideas to life. Please
            explore further for insights into my portfolio and accomplishments
            in the dynamic realm of frontend development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-[#374151] border-0 py-2 px-8 focus:outline-none hover:bg-[#445064] rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-800 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Works
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src="./my-photo.jpeg"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
