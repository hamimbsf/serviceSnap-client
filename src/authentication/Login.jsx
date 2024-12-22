import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvder";

const Login = () => {
  const { signInUser, user, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const googleLogin = () => {
    handleGoogleLogin()
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Login Failed:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        return;
      });
  };
  return (
    <>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JpsTjYf/BD-en-20241125-TRIFECTA-perspective-27f3ce45-f067-41fa-962f-9812262a5ba4-large.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md p-8 mt-14 space-y-8 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Sign In to Your Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Email"
                  className="input border-none w-full bg-transparent text-white"
                  required
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
                  className="input border-none w-full bg-transparent text-white"
                  required
                />
                <p className="text-start my-2">
                  <Link
                    to="/forgot-password"
                    className="text-white text-sm hover:underline"
                  >
                    Forget Password
                  </Link>
                </p>
                {error && <p className="text-red-600 text-start">{error}</p>}
              </div>
              {/* Submit Button */}
              <button className="btn w-full border-none bg-red-600 hover:bg-red-500 text-white">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-white">OR</div>

            {/* Social Login */}
            <div className="flex justify-center gap-4">
              <Link
                onClick={googleLogin}
                className="btn w-full btn-neutral text-white"
              >
                Google Login
              </Link>
            </div>

            {/* Register Link */}
            <p className="text-sm text-center text-gray-400">
              Don't have an account?{" "}
              <Link to="/registration" className="text-red-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default Login;
