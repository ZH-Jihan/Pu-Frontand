import React from 'react';
import toast from 'react-hot-toast';

const AdminRole = ({ user, refetch,index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://pu-server-1.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }})
    }; 
  const deleteUser = () => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://pu-server-1.onrender.com/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {res.json()})
      .then((data) => {
        if (data.success) {
          refetch()
          toast.success(`Successfully Delete User`);
        }});
    } 
  }
  return (
 
      <tr>
        <th>{index +1}</th>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} class="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button onClick={deleteUser} class="btn btn-xs">Remove User</button>
        </td>
      </tr>
  );
};

export default AdminRole;