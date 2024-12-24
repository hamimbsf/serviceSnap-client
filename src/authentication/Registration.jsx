import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvder";
import { toast } from "react-toastify";

const Registration = () => {
  const { createUser, manageProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.photoURL.value;
    const password = form.password.value;

    //password validation
    if (password.length < 6) {
      setError("Password length must be at least 6 characters");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    createUser(email, password)
      .then((res) => {
        //managing profile
        manageProfile(name, image);
        e.target.reset();
        navigate("/");
        toast.success("Registration Successful");
        //sending data to the serverside
      })
      .catch((error) => {
        return setError(error.message);
      });
  };
  return (
    <>
      {/* <Helmet>
    <title>Streamly || Register</title>
  </Helmet> */}
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/p4NF8Jx/rb-35252.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md p-8 space-y-3 mt-12 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Register Your Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="input input-bordered w-full bg-transparent text-white"
                />
                {error && <p>{error}</p>}
              </div>

              {/* Register Button */}
              <button className="btn w-full border-none bg-red-600 hover:bg-red-500 text-white">
                Register
              </button>
              {error && <p className="text-red-600">{error}</p>}
            </form>
            {/* <p>OR</p>
        <button className="btn w-full border-none bg-red-600 hover:bg-red-500 text-white">
          Register by Google
        </button> */}
            {/* Sign In Link */}
            <p className="text-sm text-center text-gray-400">
              If you have already an account?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default Registration;
