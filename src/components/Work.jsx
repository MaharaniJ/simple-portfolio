import React from "react";
import { data } from "../data/data";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

 

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#46464c] group container rounded-md flex flex-col justify-center 
               mx-auto content-div card-container  hover:scale-90 duration-500"
            >
              {/* Image */}
              <div className="card-image "></div>

              {/* Project Details */}
              <div className="card-details flex flex-col justify-between p-4">
                <span className="mt-2 overflow-hidden text-blue-700 tracking-wider text-center">
                  {item.name}
                </span>
                <div className="pt-8 text-center mb-5">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-500 text-gray-700 text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live}>
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-blue-500 text-gray-700 text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
