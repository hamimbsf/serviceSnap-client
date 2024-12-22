import { useContext, useState } from "react";
// import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvder";
import { useForm } from "react-hook-form";

const ForgetPass = () => {
  const { handleResetPassword } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    setMessage("");
    handleResetPassword(email)
      .then(() => {
        setMessage("Check your email");
      })
      .catch(() => {
        setMessage("Register your email");
      });
  };

  return (
    <>
      {/* <Helmet>
        <title>Streamly || Forget Password</title>
      </Helmet> */}
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JpsTjYf/BD-en-20241125-TRIFECTA-perspective-27f3ce45-f067-41fa-962f-9812262a5ba4-large.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md p-8 space-y-8 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Reset your password
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-transparent text-white"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              {message && <p className="text-red-500">{message}</p>}

              {/* Submit Button */}
              <button className="btn w-full border-none bg-red-600 hover:bg-red-500 text-white">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default ForgetPass;
