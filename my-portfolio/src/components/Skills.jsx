import React from "react";
import { skills } from "../data"; 

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lh:w-3/4 mx-auto text-white">
                        My expertise lies in harnessing the power of cutting-edge technologies to deliver 
                        seamless user experiences
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-green-600 hover:bg-yellow-900 rounded flex p-3 h-full items-center">
                                <span className="title-font font-medium text-white">
                                    {skill[1]}
                                    {skill[2]}
                                    {skill[3]}
                                    {skill[4]}
                                    {skill[5]}
                                    {skill[6]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}