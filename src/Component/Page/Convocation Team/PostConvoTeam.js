import React, { useState } from "react";
import toast from "react-hot-toast";
import employe from "../../../data/employee.json";
import CustomAxiosPost from "../../Hooks/CustomAxiosPost";
import useFatchData from "../../Hooks/useFatchData";
const PostConvoTeam = () => {
  const { data: allFaculty } = useFatchData("/faculty");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedName, setSelectedName] = useState("");

  const facultyList = allFaculty.filter((el) => el.status === "Active");

  const allMember = employe.concat(facultyList);

  const handleCheckboxChange = (id) => {
    if (selectAll) {
      // If selectAll is true, unselect all checkboxes
      setSelectAll(false);
      setSelectedItems([]);
    } else {
      const index = selectedItems.indexOf(id);
      if (index === -1) {
        // Item is not selected, add it to the array
        setSelectedItems([...selectedItems, id]);
      } else {
        // Item is already selected, remove it from the array
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1);
        setSelectedItems(updatedItems);
      }
    }
  };

  const uniqueNames = Array.from(
    new Set(allMember.map((item) => item.Dept || item.dipartment))
  );
  console.log(uniqueNames);
  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };
  let data;
  if (selectedName) {
    data = allMember.filter(
      (el) => el.Dept === selectedName || el.dipartment === selectedName
    );
  } else {
    data = allMember;
  }

  const hendleTeamPost = async (e) => {
    e.preventDefault();
    const teamData = {
      teamName: e.target.teamName.value,
      teamLeader: e.target.teamLeader.value,
      teamSecretary: e.target.teamSecretary.value,
      responsibility: e.target.description.value,
      teamMember: selectedItems,
    };
    const respons = await CustomAxiosPost("/convocationTeam", teamData);
    if (respons) {
      e.target.reset();
      setSelectedItems([]);
      toast.success("Successfully Add Team Info");
    }
  };
  return (
    <div>
      <form onSubmit={hendleTeamPost}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Entry Convocation Team{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Commitee Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Type Commitee Name"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="teamName"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Convener
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Type Convener Name"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="teamLeader"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Member Secretary
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Member Secretary Name"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="teamSecretary"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 py-2">
                          Select Team Member Dept.
                        </label>
                        <select
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          value={selectedName}
                          onChange={handleSelectChange}
                        >
                          <option value="">--- Select ---</option>
                          {uniqueNames.map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <p>Selected Options: {selectedOptions.join(', ')}</p> */}
                    </div>
                    <div class="form-control flex-auto w-full mb-1 text-lg space-y-2 pb-1">
                      <label class="font-semibold text-gray-600 ">
                        Duties & Responsibilities
                      </label>
                      <textarea
                        name="description"
                        class="w-full min-h-[100px] text-base max-h-[200px] h-20 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                        placeholder="Enter Team  Duties & Responsibilities"
                        spellcheck="true"
                      ></textarea>
                    </div>
                    <div>
                      <h1 class="text-xl font-bold text-gray-800 dark:text-white my-1 ">
                        Select Team Member
                      </h1>

                      <div className="grid lg:grid-cols-5 gap-2">
                        {employe &&
                          data.map((menu) => (
                            <label class="inline-flex items-center mt-2">
                              <input
                                type="checkbox"
                                checked={
                                  selectAll ||
                                  selectedItems.includes(menu.Name || menu.name)
                                }
                                onChange={() =>
                                  handleCheckboxChange(menu.Name || menu.name)
                                }
                                class="form-checkbox h-5 w-5 text-red-600"
                              />
                              <span class="ml-2 text-gray-700">
                                {menu.Name || menu.name}
                              </span>
                            </label>
                          ))}
                      </div>
                    </div>
                    <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="submit"
                        class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Add Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostConvoTeam;
