import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";

const PopularServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/popular-services`
        );
        setAllServices(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-8">
        {allServices?.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
