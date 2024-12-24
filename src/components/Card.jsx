import { Link } from "react-router-dom";

const Card = ({ service }) => {
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
    <div className="card shadow-lg dark:text-white rounded-lg">
      {/* Service Image */}
      <figure>
        <img
          src={productImg}
          alt="Service Name"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </figure>
      {/* Card Content */}
      <div className="card-body p-6">
        {/* Service Name */}
        <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
        {/* Service Description */}
        <p className="text-sm mb-4">{description.substring(0, 100)}</p>
        {/* Provider Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={providerPhoto} alt="Provider Name" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">{providerName}</p>
            <p className="text-sm font-medium">{area}</p>
          </div>
        </div>
        {/* Service Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">${price}</span>
          {/* View Detail Button */}
          <Link to={`/service/${_id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
