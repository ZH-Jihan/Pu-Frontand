import React from "react";
import useFatchData from "../../../Hooks/useFatchData";
import Table from "../../../Utilits/Table/Table";

const ViewAllUser = () => {
    const { data: allUser } = useFatchData("/user");
    console.log(allUser);
    const tableHead = [
        { field: "name", header: "User Name" },
        { field: "email", header: "User Email" },
        { field: "demo", header: "User Password" },
        { field: "role", header: "User Role" },
      ];
  return (
      <div class="text-gray-900 lg:ml-8">
          <h1 class="text-3xl text-center ">All Users</h1>
        <div class="px-3 py-4 flex justify-center">
          <Table columns={tableHead} data={allUser.data} funtion= {false}/>
        </div>
    </div>
  );
};

export default ViewAllUser;
