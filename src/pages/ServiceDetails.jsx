import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvder";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useEffect(() => {
    fetchService();
  }, []);
  const fetchService = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/service/${id}`
      );
      setService(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBookService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceProviderEmail = form.providerEmail.value;
    const serviceProviderName = form.providerName.value;
    const serviceName = form.serviceName.value;
    const serviceTakerEmail = form.currentUserEmail.value;
    const serviceTakerName = form.currentUserName.value;
    const serviceDate = form.serviceDate.value;
    const specialInstructions = form.specialInstructions.value;
    const price = form.price.value;
    if (user?.email === serviceProviderEmail) {
      return toast.error("Action not permited");
    }
    const serviceData = {
      id: service?._id,
      serviceProviderEmail,
      serviceName,
      serviceProviderName,
      serviceTakerEmail,
      serviceTakerName,
      serviceDate,
      specialInstructions,
      price,
      status: "pending",
    };
    // console.log(serviceData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/book-service`,
        serviceData
      );
      // console.log(data);
      toast.success("Congrats");
      navigate("/booked-services");
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data);
    }
  };
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <Helmet>
          <title>ServiceSnap || {`${service?.serviceName}`}</title>
        </Helmet>
        {/* Card Layout */}
        <div className="card lg:card-side bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Left Section: Service Image */}
          <figure className="overflow-hidden md:w-[50%]">
            <img
              src={service?.productImg}
              alt="Service Name"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </figure>
          {/* Right Section: Content */}
          <div className="card-body lg:w-1/2 p-8 lg:p-10 bg-white">
            {/* Service Information */}
            <h2 className="card-title text-3xl font-bold text-black">
              {service?.serviceName}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {service?.description}
            </p>
            {/* Service Provider Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img
                    src={service?.providerPhoto}
                    alt={service?.providerName}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl font-medium text-black">
                  {service?.providerName}
                </p>
                <p className="text-sm text-black">
                  <span className="font-semibold ">Location:</span>{" "}
                  {service?.area}
                </p>
              </div>
            </div>
            {/* Service Price and Button */}
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-green-600">
                Price: <span>${service?.price}</span>
              </div>
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Book Now
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <form onSubmit={handleBookService}>
                    {/* Service Name */}
                    <div className="mb-4">
                      <label
                        htmlFor="serviceName"
                        className="block text-sm font-medium text-white"
                      >
                        Service Name
                      </label>
                      <input
                        type="text"
                        name="serviceName"
                        value={`${service?.serviceName}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>

                    {/* Provider Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="providerEmail"
                        className="block text-sm font-medium text-white"
                      >
                        Provider Email
                      </label>
                      <input
                        type="email"
                        name="providerEmail"
                        value={`${service?.providerEmail}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>

                    {/* Provider Name */}
                    <div className="mb-4">
                      <label
                        htmlFor="providerName"
                        className="block text-sm font-medium text-white"
                      >
                        Provider Name
                      </label>
                      <input
                        type="text"
                        name="providerName"
                        value={`${service?.providerName}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>

                    {/* Current User Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="currentUserEmail"
                        className="block text-sm font-medium text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="currentUserEmail"
                        value={`${user?.email}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>

                    {/* Current User Name */}
                    <div className="mb-4">
                      <label
                        htmlFor="currentUserName"
                        className="block text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="currentUserName"
                        value={`${user?.displayName}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>

                    {/* Service Taking Date */}
                    <div className="mb-4">
                      <label
                        htmlFor="serviceDate"
                        className="block text-sm font-medium text-white"
                      >
                        Service Taking Date
                      </label>
                      <input
                        type="date"
                        name="serviceDate"
                        required
                        className="input border-none w-full"
                      />
                    </div>

                    {/* Special Instructions */}
                    <div className="mb-4">
                      <label
                        htmlFor="specialInstructions"
                        className="block text-sm font-medium text-white"
                      >
                        Special Instructions
                      </label>
                      <textarea
                        name="specialInstructions"
                        rows="3"
                        required
                        placeholder="your service plan"
                        className="textarea border-none w-full"
                      ></textarea>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-white"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        value={`${service?.price}`}
                        readOnly
                        className="input border-none w-full cursor-not-allowed"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full mt-4"
                    >
                      Purchase
                    </button>
                  </form>
                  <div className="modal-action">
                    <button
                      className="btn w-full btn-error"
                      onClick={() =>
                        document.getElementById("my_modal_1").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
