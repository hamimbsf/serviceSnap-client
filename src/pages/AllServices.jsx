import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetchAllServices();
  }, []);
  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/all-services`
      );
      setAllServices(data);
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-8">
        {allServices.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
