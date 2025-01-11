import { Helmet } from "react-helmet-async";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_EMAIL_PUBLIC_ID}`,
        }
      )
      .then(
        () => {
          Swal.fire({
            title: "Message sent successfully",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>ServiceSnap || Contact Us</title>
      </Helmet>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/WFgxBPb/Network-services-scaled.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="md:w-[30vw] w-[90vw] mt-16 mx-auto bg-[#00000078] text-white p-4 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add New Service
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            {/* Image URL */}

            {/* Service Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                name="to_name"
                placeholder="Enter Your Name"
                className="input border-none text-black w-full"
                required
              />
            </div>

            {/* Price */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                name="from_name"
                placeholder="Enter your email"
                className="input border-none text-black w-full"
                required
              />
            </div>

            {/* Description */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea text-black border-none w-full"
                placeholder="Message"
                maxLength="100"
                required
              ></textarea>
            </div>

            {/* Add Button */}
            <div className="form-control">
              <button className="btn btn-primary w-full">Contact Us</button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-[92vh]"></div>
    </>
  );
};

export default ContactUs;
