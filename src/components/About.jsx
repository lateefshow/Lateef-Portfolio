import React from "react";

import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download } from "./Icons";

import resume from "../assets/resume.pdf";
//import profile from "../assets/profile.jpg";
import profile from "../assets/lateef.PNG"
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  return (
    <div
      name="About"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-to-b to-black via-black from-gray-800"
    >
      <div className="section flex flex-col gap-6">
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>

        {/* Flex container for image and details */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-6">
          {/* LEFT: Profile Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
            <AnimatedWrapper animateFrom="left">
              <img
                src={profile}
                alt="Lateef Kehinde Sonibare"
                loading="lazy"
                className=" hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-white duration-300 rounded-2xl w-[340px] sm:w-[380px] md:w-[400px]"
              />
            </AnimatedWrapper>
          </div>

          {/* RIGHT: About Content */}
          <div className="w-full lg:w-2/3 text-white">
            <AnimatedWrapper animateFrom="right">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                Hi, I'm{" "}
                <span className="text-cyan-500">Lateef Kehinde Sonibare</span>
              </h3>
            </AnimatedWrapper>

            <div className="text-gray-400 space-y-3 text-justify leading-relaxed font-medium">
              <AnimatedWrapper>
                <p>
                  I am a passionate and results-driven professional with a
                  strong academic background in Mathematics and Computer
                  Engineering, complemented by diverse experience in Software
                  Development, Robotics Instruction, IT Support, and STEM
                  Education. I have cultivated a deep understanding of both
                  frontend and backend technologies, education methodologies,
                  and IT infrastructure.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <p>
                  My journey in software development includes designing and
                  building responsive, user-centric web applications using HTML,
                  CSS, JavaScript, PHP, React.js, Node.js, MySQL, and MongoDB.
                  I’ve developed full-featured web projects, implemented
                  database solutions, and handled end-to-end deployment. Through
                  professional training at SAIL Innovation Lab, I continue to
                  sharpen my full-stack development skills while working on
                  real-world, scalable applications.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <p>
                  I also have extensive experience in STEM and robotics
                  instruction, delivering hands-on training with Arduino,
                  sensors, and automation projects. At IT Prowess and Future
                  Builders College, I designed and taught STEM-aligned
                  curricula, combining practical skills with classroom theory to
                  help students grasp complex concepts and spark curiosity in
                  tech and engineering.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <p>
                  My role as an IT Support Specialist at PJ Digital Affairs
                  involved managing Microsoft 365 environments, system
                  installation, troubleshooting, data recovery, networking, and
                  remote assistance. I pride myself on technical acumen and
                  problem-solving capabilities across hardware and software.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <p>
                  With strong communication, leadership, and a passion for
                  merging technology and education, I’m committed to solving
                  real-world problems and contributing meaningfully to
                  organizations and communities.
                </p>
              </AnimatedWrapper>
            </div>

            

            {/* Resume Download Button */}
            <AnimatedWrapper>
              <div className="py-5">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  download={true}
                  className="group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer w-36 relative"
                >
                  <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 transition-transform delay-[400ms]">
                    Download My Resume
                  </span>
                  <span className="absolute right-5 sm:scale-0 group-hover:scale-100 transition-all delay-200 animate-pulse duration-500">
                    <Download />
                  </span>
                </a>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
