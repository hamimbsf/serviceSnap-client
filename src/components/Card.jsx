import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card rounded-lg">
      {/* Service Image */}
      <figure>
        <img
          src=""
          alt="Service Name"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </figure>
      {/* Card Content */}
      <div className="card-body p-6">
        {/* Service Name */}
        <h2 className="card-title text-2xl font-bold">Service Name</h2>
        {/* Service Description */}
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quidem, nesciunt, tempora quae doloremque
        </p>
        {/* Provider Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="" alt="Provider Name" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Provider Name</p>
          </div>
        </div>
        {/* Service Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">$100</span>
          {/* View Detail Button */}
          <Link to={`/services/details`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
