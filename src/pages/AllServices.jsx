import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/all-services?search=${search}`
        );
        setAllServices(data);
        // console.log(data);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchAllServices();
  }, [search]);

  return (
    <div>
      <Helmet>
        <title>ServiceSnap || All Service</title>
      </Helmet>
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex p-1 overflow-hidden border md:w-[33%] rounded-lg focus-within:ring focus-within:ring-opacity-40 mt-16">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
            }}
            value={search}
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-8">
        {allServices.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
