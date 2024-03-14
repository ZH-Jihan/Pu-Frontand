import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../Page/Security/myAuth";
import "./tabel.css";

const Table = ({
  data = null,
  columns = null,
  hover = true,
  other = null,
  funtion = false,
  user = null,
  striped = true,
}) => {
  const navigate = useNavigate();
  const users = getUserRole()
  let role = false
  if (users.role === "user") {
    role = true
    }
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <div class="flex flex-col w-full">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead
                class="bg-amber-200 border-b"
                style={{ position: "sticky", top: "0" }}
              >
                <tr>
                  {columns &&
                    columns.map((head) => (
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        {getCaps(head.header, head.field)}
                      </th>
                    ))}
                  {funtion === true && (
                    <th
                      scope="col"
                      class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                    >
                      Button
                    </th>
                  )}
                  {other &&
                    other.map((col) => (
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {col.header}
                      </td>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((row) => (
                    <tr
                      className={` ${hover && "hover"} ${striped && "striped"}`}
                    >
                      {columns.map((col) => (
                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row[col.field]}
                        </td>
                      ))}

                      {funtion === true && role === false ? (
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button
                          className="btn btn-ghost btn- rounded-2xl border-2 border-red-400"
                            onClick={() =>
                              navigate(`/edithostelmember/${row._id}`)
                            }
                          >
                            Edit Member
                          </button>
                        </td>
                      ) : (
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                            className="btn btn-ghost btn- rounded-2xl border-2 border-red-400"
                              onClick={() =>
                                navigate(`/datails/${row._id}`)
                              }
                            >
                              Details
                            </button>
                          </td>
                        )}

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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
