import React from "react";

const TableBody = ({ columns,data,other, hover = true, striped = true }) => {
  return (
    <>
      <tbody>
        {data &&
          data.map((row) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              {columns.map((col) => (
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row[col.field]}
                </td>
              ))}
              {other &&
                other.map((col) => (
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {col.field}
                  </td>
                ))}
              <td></td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
