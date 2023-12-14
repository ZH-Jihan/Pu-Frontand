import React, { useEffect, useState } from "react";

const AllOrder = () => {
  const [allorders, setAllOrders] = useState([]);
  console.log(allorders);
  useEffect(() => {
    const url = `https://pu-server-1.onrender.com/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  return (
    <table class="min-w-full border-collapse block md:table">
      <thead  class="block md:table-header-group">
        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th style={{ color: "#042488" }} class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Student Name / ID
          </th>
          <th style={{ color: "#042488" }} class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Faculty Name
          </th>
          <th style={{ color: "#042488" }} class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Faculty Rating
          </th>
          <th style={{ color: "#042488" }} class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Review Details
          </th>
        </tr>
      </thead>
      <tbody class="block md:table-row-group">
        {allorders.map((review) => (
          <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
            
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Student Name / ID</span>
              {review.name}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">
              Faculty Name
              </span>
              {review.faculty}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">
              Faculty Rating
              </span>
              {review.ratings}*
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Review Details</span>
              {review.review}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllOrder;
