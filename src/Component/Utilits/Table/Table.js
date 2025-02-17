import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteCustomAxios from "../../Hooks/DeleteCustomAxios";
import { getUserRole } from "../../Page/Security/myAuth";
import "./tabel.css";

const Table = ({
  data = null,
  columns = null,
  hover = true,
  other = null,
  edit = false,
  backMember = false,
  backMemberPath = null,
  details = false,
  deleted = false,
  user = null,
  editpathname = null,
  detailPath = null,
  deletePath = null,
  striped = true,
}) => {
  const navigate = useNavigate();
  const users = getUserRole();
  
  let role = false;
  if (users.role !== "user") {
    role = true;
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
                  {details === true && users.role && (
                    <th
                      scope="col"
                      class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                    >
                      Button
                    </th>
                  )}
                  {columns &&
                    columns.map((head) => (
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        {getCaps(head.header, head.field)}
                      </th>
                    ))}
                  {edit === true && role === true && (
                    <th
                      scope="col"
                      class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                    >
                      Button
                    </th>
                  )}
                  {backMember === true && role === true && (
                    <th
                      scope="col"
                      class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                    >
                      Button
                    </th>
                  )}
                  {deleted === true && role === true && (
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
                      {details === true && users.role && (
                        <td class=" py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button
                            className="rounded-2xl border-2 border-red-400 px-4 py-1"
                            onClick={() => navigate(`/${detailPath}/${row._id}`)}
                          >
                            Details
                          </button>
                        </td>
                      )}
                      
                      {columns.map((col) => (
                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row[col.field]}
                        </td>
                      ))}

                      {edit === true && role === true && (
                        <td class="py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button
                            className="rounded-2xl border-2 border-red-400 px-4 py-1"
                            onClick={() =>
                              navigate(`/${editpathname}/${row._id}`)
                            }
                          >
                            Edit
                          </button>
                        </td>
                      )}
                      {backMember === true && role === true && (
                        <td class="py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button
                            className="rounded-2xl border-2 border-red-400 px-4 py-1"
                            onClick={() =>
                              {DeleteCustomAxios(`/${backMemberPath}/${row._id}`);
                              window.location.reload(false)}
                            }
                          >
                            Reinstate
                          </button>
                        </td>
                      )}
                      {deleted === true && users.role === "admin" && (
                        <td class="py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button
                            className="rounded-2xl border-2 border-red-400 px-4 py-1"
                            onClick={() =>
                              DeleteCustomAxios(`/${deletePath}/${row._id}`)
                            }
                          >
                            Delete
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
