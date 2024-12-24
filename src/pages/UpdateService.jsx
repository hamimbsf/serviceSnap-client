import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
  const [updateService, setUpdateService] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchService();
  }, []);
  const fetchService = async () => {
    try {
      const { data } = await axiosSecure.get(`/service/${id}`);
      setUpdateService(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceData = {
      productImg: form.imageURL.value,
      serviceName: form.serviceName.value,
      price: parseFloat(form.price.value), // Ensure price is a number
      area: form.area.value,
      description: form.description.value,
    };

    try {
      const { data } = await axiosSecure.put(`/update/${id}`, serviceData);

      console.log("Updated Data:", data);
      navigate("/manage-service");
      form.reset();
      toast.success("Service Updated Successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to Update Service!");
    }
  };
  return (
    <>
      <Helmet>
        <title>ServiceSnap || {`${updateService?.serviceName}`}</title>
      </Helmet>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/VtZHYy1/Network-services-scaled.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md px-8 py-4 mt-6 space-y-4 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Reset your password
            </h2>

            {/* Form */}
            <form onSubmit={handleUpdate}>
              {/* Image URL */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Image URL of the Service</span>
                </label>
                <input
                  type="url"
                  name="imageURL"
                  defaultValue={updateService?.productImg}
                  placeholder="Enter image URL"
                  className="input border-none text-black w-full"
                  required
                />
              </div>

              {/* Service Name */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  defaultValue={updateService?.serviceName}
                  placeholder="Enter service name"
                  className="input border-none text-black w-full"
                  required
                />
              </div>

              {/* Price */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={updateService?.price}
                  placeholder="Enter price"
                  className="input border-none text-black w-full"
                  required
                />
              </div>

              {/* Service Area */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Service Area</span>
                </label>
                <select
                  name="area"
                  defaultValue={updateService?.area}
                  className="select select-bordered text-black w-full"
                  required
                >
                  <option disabled>Select Area</option>
                  <option>Dhaka</option>
                  <option>Comilla</option>
                  <option>Chittagong</option>
                  <option>Rajshahi</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-control mb-2">
                <label className="label">
                  <span className="">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={updateService?.description}
                  className="textarea text-black border-none w-full"
                  placeholder="Enter service description"
                  maxLength="100"
                  required
                ></textarea>
              </div>

              {/* Add Button */}
              <div className="form-control">
                <button className="btn btn-primary w-full">
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-[91vh]"></div>
    </>
  );
};

export default UpdateService;
