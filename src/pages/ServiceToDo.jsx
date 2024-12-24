import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvder";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ServiceToDoTableRow from "../components/ServiceToDoTableRow";
import { toast } from "react-toastify";

export const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [providerData, setProviderData] = useState([]);
  const { email } = user;
  useEffect(() => {
    fetchProviderData();
  }, []);
  const fetchProviderData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/service-provider/${email}`
      );
      // console.log(data);
      setProviderData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleStatusUpdate = async (id, prevStatus, status) => {
    console.table({ id, prevStatus, status });
    if (prevStatus === status) return toast.error("Not Allowed");
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/service-status-update/${id}`,
        { status }
      );
      console.log(data);
      fetchProviderData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>ServiceSnap || Service To Do</title>
      </Helmet>
      <div className="overflow-x-auto container mx-auto py-16 px-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {providerData?.map((data, index) => (
              <ServiceToDoTableRow
                handleStatusUpdate={handleStatusUpdate}
                key={data._id}
                data={data}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
