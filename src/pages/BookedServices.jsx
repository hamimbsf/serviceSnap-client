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
      // console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>ServiceSnap || Booked Service</title>
      </Helmet>
      <div className="overflow-x-auto container dark:text-white mx-auto my-16 px-4">
        {bookedData.length === 0 ? (
          <p className=" text-2xl font-bold">You haven't booked any services</p>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="dark:text-white"></th>
                <th className="dark:text-white">Service Name</th>
                <th className="dark:text-white">Service Date</th>
                <th className="dark:text-white">Service Provider Email</th>
                <th className="dark:text-white">Price</th>
                <th className="dark:text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookedData?.map((data, index) => (
                <tr key={data._id}>
                  <th>{++index}</th>
                  <td>{data?.serviceName}</td>
                  <td>{data?.serviceDate}</td>
                  <td>{data?.serviceProviderEmail}</td>
                  <td>{data?.price}</td>
                  <td className="">
                    <span className="btn btn-xs btn-warning">
                      {data?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default BookedServices;
