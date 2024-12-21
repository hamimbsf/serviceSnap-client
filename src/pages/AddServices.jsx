const AddServices = () => {
  /* Create an Add Product page where there will be a form having the following fields:
Image URL of the Service 
Service Name,
Price,
Service Area, 
Description
Add button


The person adding the service is a service Provider .  You have to store service provider information with the service information such as Service provider image , Service provider name, Service provider email   will be taken from firebase . On clicking the add service button service information  will be added in the database. 
 */
  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    const data = { imageURL, serviceName, price, area, description };
    console.log(data);
  };

  return (
    <>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/WFgxBPb/Network-services-scaled.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="md:w-[30vw] w-[90vw] mt-16 mx-auto bg-[#00000078] text-white p-4 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add New Service
          </h2>
          <form onSubmit={handleAddMovies}>
            {/* Image URL */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image URL of the Service</span>
              </label>
              <input
                type="url"
                name="imageURL"
                placeholder="Enter image URL"
                className="input border-none w-full"
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
                placeholder="Enter service name"
                className="input border-none w-full"
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
                placeholder="Enter price"
                className="input border-none w-full"
              />
            </div>

            {/* Service Area */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <select name="area" className="select select-bordered w-full">
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
                className="textarea border-none w-full"
                placeholder="Enter service description"
                maxLength="100"
              ></textarea>
            </div>

            {/* Add Button */}
            <div className="form-control">
              <button className="btn btn-primary w-full">Add Service</button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-[92vh]"></div>
    </>
  );
};

export default AddServices;
