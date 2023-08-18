import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="inline border-b-4 border-pink-600">
              About
            </p>
          </motion.div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl">
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              viewport={{ once: false, amount: 0.3 }}
              whileInView={"show"}
            >
              Hi. I'm Maharani J, nice to meet you. Please take a look around.
            </motion.p>
          </div>

          <div>
            <motion.p
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              viewport={{ once: false, amount: 0.3 }}
              whileInView={"show"}
              className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
            >
              {/* I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips? */}
              With a strong foundation in web development using MERN Stack, I
              bring a set of skills that can contribute to the success of your
              projects.I am passionate about building excellent web development
              projects that improves the lives of those around me. I interested
              in creating responsive websites and web applications for clients
              ranging from individuals and small-businesses all the way to large
              enterprise corporations.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
