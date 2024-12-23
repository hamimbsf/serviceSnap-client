import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ServiceCard = ({ service, handleDelete, fetchData }) => {
  const {
    productImg,
    _id,
    serviceName,
    price,
    area,
    description,
    providerName,
    providerPhoto,
  } = service;

  return (
    <>
      <div className="card w-full bg-base-100 ">
        {/* Service Image */}
        <figure>
          <img
            src={productImg}
            alt={serviceName}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          {/* Service Name */}
          <h2 className="card-title text-xl font-bold text-primary">
            {serviceName}
          </h2>
          {/* Service Provider */}
          <div className="flex items-center gap-4">
            <img
              src={providerPhoto}
              alt={providerName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">{providerName}</span>
          </div>
          {/* Service Area */}
          <p className="text-sm">Area: {area}</p>
          {/* Service Price */}
          <p className="text-lg font-medium text-accent">Price: ${price}</p>
          {/* Service Description */}
          <p className="text-sm mt-2">{description}</p>
          {/* Action Buttons */}
          <div className="md:flex justify-between gap-4 mt-4 space-y-3 md:space-y-0">
            {/* Update Button */}
            <Link
              to={`/update/${_id}`}
              className="btn w-full md:w-[45%] btn-sm btn-primary"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-full md:w-[45%] btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
