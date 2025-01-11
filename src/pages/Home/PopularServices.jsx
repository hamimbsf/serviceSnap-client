import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PopularServices = () => {
  const [allServices, setAllServices] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const { data } = await axiosSecure.get(`/popular-services`);
        setAllServices(data);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchAllData();
  }, []);
  // const newData = useQuery({});

  return (
    <div id="services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 py-8">
        {allServices?.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
