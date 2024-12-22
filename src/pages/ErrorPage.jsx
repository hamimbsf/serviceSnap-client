import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/54WQ0sz/rb-35252.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <Link to="/" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
