import React from "react";
import { projects } from "../data";


export default function Projects() {
    return (
        <section  id="projects" className="text-white bg-black body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Below are websites and apps i've built in the past. You can view them
                        by just clicking on each image.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/3 w-100 p-3">
                                <div className="flex relative h-full">
                                    <img
                                    alt="img"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            </a>    
                        ))
                    }
                </div>
            </div>
        </section>
    );
}