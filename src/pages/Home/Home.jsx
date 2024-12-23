import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import PopularServices from "./PopularServices";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ServiceSnap </title>
      </Helmet>
      <Banner />
      <PopularServices />
      <Testimonial />
      <AboutUs />
    </>
  );
};

export default Home;
