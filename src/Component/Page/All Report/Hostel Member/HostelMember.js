import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";
import Table from "../../../Utilits/Table/Table";

const HostelMember = () => {
  const { data: hostelmember, error } = useFatchData("/hostelmember");

  const [selectedName, setSelectedName] = useState({
    department: "",
    report: "Current",
  });
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedName((prev) => ({ ...prev, [name]: value }));
  };
  let activeMember;
  if (selectedName.report === "EX-Member") {
    activeMember = hostelmember.filter((member) => member.isDeleted === true);
  } else {
    activeMember = hostelmember.filter((member) => member.isDeleted === false);
  }

  const detailtableHead = [
    { field: "name", header: "Name" },
    { field: "number", header: "Number" },
    { field: "flate", header: "Flat" },
    { field: "room", header: "Room" },
    { field: "seat", header: "Seat" },
    { field: "joinDate", header: "Join Date" },
    { field: "department", header: "Depa." },
  ];

  //**** Set Department Name To Show Select Button *****//

  const uniqueNames = Array.from(
    new Set(activeMember.map((item) => item.department))
  );

  let data;
  if (selectedName.department) {
    data = activeMember.filter(
      (el) => el.department === selectedName.department
    );
  } else {
    data = activeMember;
  }

  if (error) {
    return <h1>{error?.response?.data?.error}</h1>;
  }
  const counteMemberDepWise = (name) => {
    let data;
    if (name) {
      data = activeMember.filter((el) => el.department === name);
    }
    return data?.length;
  };
  return (
    <div>
      <h1 className="text-2xl pb-4 text-center font-bold">
        Women Hostel Member
      </h1>
      <h1 className="text-lg pb-2 text-center font-bold">
        Total : {activeMember?.length}
      </h1>
      <h2 className="lg:w-1/4 m-auto text-center font-bold grid grid-cols-4">
        {uniqueNames.map((name) => (
          <span>{`${name} : ${counteMemberDepWise(name)} `}</span>
        ))}
      </h2>
      <div className="grid grid-cols-4 lg:grid-cols-2 w-2/4">
        <div class="form-control lg:ml-16  flex flex-col mb-3">
          <label class="font-semibold text-gray-600 py-2">
            Select Department
          </label>
          <select
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            value={selectedName.department}
            onChange={handleSelectChange}
            name="department"
          >
            <option value="">--- Select ---</option>
            {uniqueNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div class="form-control lg:ml-16  flex flex-col mb-3">
          <label class="font-semibold text-gray-600 py-2">Select Report</label>
          <select
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            value={selectedName.report}
            onChange={handleSelectChange}
            name="report"
          >
            <option>Current</option>
            <option>EX-Member</option>
          </select>
        </div>
      </div>
      <Table
        columns={detailtableHead}
        data={data}
        details={true}
        edit={selectedName.report !== "EX-Member" && true }
        editpathname={"edithostelmember"}
        detailPath={"datailshosMember"}
      />
    </div>
  );
};

export default HostelMember;
