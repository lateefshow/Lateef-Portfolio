import React from "react";
import { GMail, Map, CopyRight, ArrowRightLong } from "./Icons";
import { Link } from "react-scroll";
import navLinks from "../data/navlinks";
import contactInfo from "../data/contactInfo";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className="bg-gradient-to-t from-gray-500 via-black to-black w-full text-gray-300">
      <div className="section pb-5">
        <div className="flex flex-wrap justify-between">
          {/* Personal Intro */}
          <div className="w-full sm:w-3/5 lg:w-2/5 pr-2">
            <AnimatedWrapper>
              <h3 className="text-white text-[1.75rem] font-bold pb-2">
                Lateef Kehinde Sonibare
              </h3>
              <p className="text-lg text-cyan-400 pb-5">
                Software Developer | STEM Educator
              </p>
              <p>Thanks for checking out my portfolio.</p>
              <p>
                I’m passionate about building apps and inspiring tech learners.
              </p>
              <p>Let’s connect or collaborate — reach out anytime!</p>
            </AnimatedWrapper>
          </div>

          {/* Quick Links */}
          <div className="w-full xs:w-2/5 mt-8 sm:w-2/5 sm:mt-0 lg:w-[30%] sm:pl-20 lg:pl-12 justify-start">
            <AnimatedWrapper>
              <h3 className="text-white text-[1.35rem] xs:text-2xl font-bold pb-4">
                Quick Links
              </h3>
              {navLinks.map(({ link, id }) => (
                <div key={id} className="group w-fit px-3">
                  <Link to={link} smooth duration={500}>
                    <div className="flex items-center gap-2 font-semibold text-white cursor-pointer">
                      <ArrowRightLong />
                      <span className="bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 group-hover:text-transparent duration-500 group-hover:animate-pulse">
                        {link}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </AnimatedWrapper>
          </div>

          {/* Contact Info */}
          <div className="w-full mt-8 xs:w-3/5 sm:w-full lg:mt-0 lg:w-[30%] lg:pl-0">
            <AnimatedWrapper>
              <h3 className="text-white text-2xl font-bold pb-4">
                Contact Info
              </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-5 xs:gap-10 sm:gap-5 md:gap-10 justify-between">
                <div className="text-[0.9rem] font-advanced">
                  <p className="flex items-center gap-3 mb-1">
                    <GMail /> lateefshow21@gmail.com
                  </p>
                  <p className="flex items-center gap-3">
                    <Map />
                    <span className="pt-1">Lagos, Nigeria</span>
                  </p>
                </div>

                <ul className="flex items-center gap-5 md:gap-8 lg:gap-4 justify-start">
                  {contactInfo.map(({ id, link, name, icon, download }) => (
                    <li
                      key={id}
                      className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105`}
                    >
                      <a
                        href={link}
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="section py-2 text-black font-advanced">
        <AnimatedWrapper animateFrom="bottom">
          <p className="text-sm text-gray-300 flex justify-center items-center">
            <span className="px-1">
              <CopyRight />
            </span>
            {`2014 - ${year}`} | All Rights Reserved
          </p>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Footer;
