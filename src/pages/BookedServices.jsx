import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvder";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookedServices = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [bookedData, setBookedData] = useState([]);
  useEffect(() => {
    fetchedBookedData();
  }, []);
  const fetchedBookedData = async () => {
    try {
      const { data } = await axiosSecure.get(`/booked-services/${email}`);
      setBookedData(data);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>ServiceSnap || Booked Service</title>
      </Helmet>
      <div className="overflow-x-auto container mx-auto my-16 px-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Provider Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookedData?.map((data) => (
              <tr key={data._id}>
                <th>1</th>
                <td>{data?.serviceName}</td>
                <td>{data?.serviceDate}</td>
                <td>{data?.serviceProviderEmail}</td>
                <td>{data?.price}</td>
                <td className="">
                  <span className="btn btn-xs btn-warning">{data?.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookedServices;
