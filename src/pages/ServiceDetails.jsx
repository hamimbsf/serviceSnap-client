import React from "react";

const ServiceDetails = () => {
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        {/* Card Layout */}
        <div className="card lg:card-side bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Left Section: Service Image */}
          <figure className="overflow-hidden">
            <img
              src="https://source.unsplash.com/720x400/?service"
              alt="Service Name"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </figure>
          {/* Right Section: Content */}
          <div className="card-body lg:w-1/2 p-8 lg:p-10 bg-white">
            {/* Service Information */}
            <h2 className="card-title text-3xl font-bold text-gray-800">
              Service Information
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              This is where the service description will go. Highlight key
              features and benefits to attract customers. Make it concise and
              impactful!
            </p>
            {/* Service Provider Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img
                    src="https://source.unsplash.com/100x100/?person"
                    alt="Provider Name"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">
                  Provider Name
                </p>
                <p className="text-sm text-gray-500">
                  Location: Service Location
                </p>
              </div>
            </div>
            {/* Service Price and Button */}
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-green-600">
                Price: <span className="text-2xl">$servicePrice</span>
              </div>
              <button className="btn btn-primary px-6 py-3 font-semibold text-white rounded-lg shadow-lg hover:bg-primary-focus transition-all duration-300">
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
