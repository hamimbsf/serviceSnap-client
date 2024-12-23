import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvder";
import axios from "axios";
import { Helmet } from "react-helmet-async";

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
              <tr className="hover" key={data._id}>
                <th>{++index}</th>
                <td>{data?.serviceName}</td>
                <td>{data?.serviceDate}</td>
                <td>{data?.serviceTakerEmail}</td>
                <td>{data?.price}</td>
                <td className="">
                  {/* <span className="btn btn-xs btn-warning">{data?.status}</span> */}
                  <details className="dropdown">
                    <summary className="btn m-1 btn-xs btn-warning">
                      {data?.status}
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]">
                      <li>
                        <button className="btn btn-xs btn-error">
                          Working
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-xs btn-success">
                          Complete
                        </button>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
