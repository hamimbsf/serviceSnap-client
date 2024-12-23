import axios from "axios";
import React from "react";

const ServiceCard = ({ service, handleDelete }) => {
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
            <button
              className="btn btn-sm w-full md:w-[45%] btn-warning"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Update
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form>
                  {/* Image URL */}
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">
                        Image URL of the Service
                      </span>
                    </label>
                    <input
                      type="url"
                      name="imageURL"
                      defaultValue={productImg}
                      placeholder="Enter image URL"
                      className="input border-none w-full"
                      required
                    />
                  </div>

                  {/* Service Name */}
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Service Name</span>
                    </label>
                    <input
                      type="text"
                      name="serviceName"
                      defaultValue={serviceName}
                      placeholder="Enter service name"
                      className="input border-none w-full"
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter price"
                      className="input border-none w-full"
                      required
                    />
                  </div>

                  {/* Service Area */}
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Service Area</span>
                    </label>
                    <select
                      name="area"
                      defaultValue={area}
                      className="select select-bordered w-full"
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
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      name="description"
                      defaultValue={description}
                      className="textarea border-none w-full"
                      placeholder="Enter service description"
                      maxLength="100"
                      required
                    ></textarea>
                  </div>

                  {/* Add Button */}
                  <div className="form-control">
                    <button className="btn btn-primary w-full">
                      Add Service
                    </button>
                  </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-accent">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
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
