// components/Certificate.jsx
import React from "react";
import lateef_certificate from "../assets/lateef_certificate.PNG";

const Certificate = () => {
  return (
    <section id="certificate" className="w-[90%] mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Certificate</h2>
      <img
        //src="/images/fullstack-certificate.jpg" // ✅ replace with your actual path
        src={lateef_certificate}
        alt="Full Stack Software Developer Certificate"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </section>
  );
};

export default Certificate;
