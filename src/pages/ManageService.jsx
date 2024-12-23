import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvder";
import ServiceCard from "../components/ServiceCard";
import { toast } from "react-toastify";

/*  Manage Services (PRIVATE)
This page will be private routes.  If a user log in, they will access the Manage Service page, 
This page will show all the services they have added from the Add Service page.


I believe you should use 'user' instead of 'they,' as it’s only the one who added the service. */
const ManageService = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  const [serviceTaker, setServiceTaker] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/all-services/${user?.email}`
      );
      setServiceTaker(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/delete-service/${id}`
      );
      fetchData();
      toast.success("Successfully Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-4 py-8 my-10">
        {serviceTaker?.map((service) => (
          <ServiceCard
            key={service?._id}
            service={service}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ManageService;
