import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvder";
import ServiceCard from "../components/ServiceCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

/*  Manage Services (PRIVATE)
This page will be private routes.  If a user log in, they will access the Manage Service page, 
This page will show all the services they have added from the Add Service page.


I believe you should use 'user' instead of 'they,' as it’s only the one who added the service. */
const ManageService = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // console.log(user.email);

  const [serviceTaker, setServiceTaker] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axiosSecure.get(`/all-services/${user?.email}`);
      setServiceTaker(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/delete-service/${id}`);

          if (response.status === 200) {
            // Assuming fetchData refreshes the list
            await fetchData();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the file.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting service:", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>ServiceSnap || Manage Service</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-4 py-8 my-10">
        {serviceTaker?.map((service) => (
          <ServiceCard
            key={service?._id}
            service={service}
            handleDelete={handleDelete}
            fetchData={fetchData}
            // handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default ManageService;
