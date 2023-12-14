import React from "react";

const TableHead = ({ condetionalHead, data, other }) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <>
      <thead class="bg-amber-200 border-b">
        <tr>
          {condetionalHead && (
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-2 py-4 text-left"
            >
              {condetionalHead}
            </th>
          )}
          {data &&
            data.map((head) => (
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-4 text-left"
              >
                {getCaps(head.header, head.field)}
              </th>
            ))}
          {other &&
            other.map((col) => (
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {col.header}
              </td>
            ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
