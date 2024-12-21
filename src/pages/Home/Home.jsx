import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularServices />
      <Testimonial />
      <AboutUs />
    </>
  );
};

export default Home;
