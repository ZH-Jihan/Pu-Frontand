import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AdminRole from './AdminRole';

const MakeAdmin = () => {

    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("user", () =>
      fetch("https://pu-server-1.onrender.com/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }


    return (
      <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Remove user</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <AdminRole
                  index={index}
                  key={user._id}
                  user={user}
                  refetch={refetch}
                ></AdminRole>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MakeAdmin;               