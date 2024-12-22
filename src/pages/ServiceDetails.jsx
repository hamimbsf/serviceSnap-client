import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
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
  // const {} = service;

  return (
    <>
      <div className="container mx-auto py-10 px-4">
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
              <button className="btn btn-primary px-6 py-3 hover:bg-primary-focus transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
