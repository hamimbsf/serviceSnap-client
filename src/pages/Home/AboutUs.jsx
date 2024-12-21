import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="my-20 space-y-8" data-aos="fade-up">
        <h1 className="uppercase font-medium md:text-[9vh] text-3xl text-center">
          s t o r y a b o u t u s
        </h1>
        {/* <span className="loading loading-dots loading-sm"></span> */}
        <div className="container mx-auto px-4 py-8 space-y-8 text-center">
          <p className="mb-6" data-aos="fade-up-right">
            Welcome to our platform! We are dedicated to connecting people
            through services. Whether you're looking to share your expertise or
            find the perfect service provider, our platform makes it simple,
            efficient, and enjoyable. Join us in building a community of trust
            and collaboration.
          </p>
          <p className="text-xs" data-aos="fade-up-left">
            Our platform is designed to help you find the right service provider
            for your needs. We offer a wide range of services, from home
            improvement to personal training, and everything in between. Our
            goal is to make it easy for you to connect with the right service
            provider for your needs, so you can get the help you need quickly
            and efficiently.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
