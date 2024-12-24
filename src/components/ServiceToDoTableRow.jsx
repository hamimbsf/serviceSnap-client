import React from "react";

const ServiceToDoTableRow = ({ data, index, handleStatusUpdate }) => {
  const { serviceName, serviceDate, serviceTakerEmail, price, status, _id } =
    data;
  // console.log(data);

  return (
    <>
      <tr>
        <th>{++index}</th>
        <td>{serviceName}</td>
        <td>{serviceDate}</td>
        <td>{serviceTakerEmail}</td>
        <td>{price}</td>
        <td className="">
          {/* <span className="btn btn-xs btn-warning">{status}</span> */}
          <details className="dropdown">
            <summary className="btn m-1 btn-xs btn-warning">{status}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]">
              <li>
                <button
                  onClick={() => handleStatusUpdate(_id, status, "Working")}
                  className="btn btn-xs btn-error"
                  disabled={status === "Working" || status === "Complete"}
                >
                  Working
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatusUpdate(_id, status, "Complete")}
                  disabled={status === "Complete"}
                  className="btn btn-xs btn-success"
                >
                  Complete
                </button>
              </li>
            </ul>
          </details>
        </td>
      </tr>
    </>
  );
};

export default ServiceToDoTableRow;
