import React, { useState } from "react";
import toast from "react-hot-toast";
import menuList from "../../../data/menuList.json";
import CustomAxiosPost from "../../Hooks/CustomAxiosPost";
import Loading from "../Sheared Page/Loading";

const MySingUp = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRole, setSelectRole] = useState({
    role: "user",
  });
  const viewReport = menuList[0]?.value;
  const addData = menuList[1]?.value;
 
  let menulist;

  if (viewReport && addData) {
    menulist = viewReport.concat(addData);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setSelectRole((prev) => ({ ...prev, [name]: value }));
  };

  const filterMenuList = (value) => {
    let menu;
    if (selectedRole.role && menuList) {
      menu = value.filter((el) => el.role.includes(selectedRole.role));
    }
    return menu;
  };

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

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedItems(
      selectAll ? [] : filterMenuList(menulist).map((item) => item.name)
    );
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      demo: event.target.password.value,
      confirmPassword: event.target.password.value,
      role: selectedRole.role,
      permission: selectedItems,
    };

    const respons = await CustomAxiosPost("/user/singup", newUser);

    if (respons?.status === "Success") {
      setSelectAll(false);
      setSelectedItems([]);
      setSelectRole({ role: "user" });
      toast.success("Successfully Create User");
    }
    event.target.reset();
  };
  if (!menuList) {
    return <Loading />;
  } else {
    return (
      <div>
        <div class=" bg-gray-100  flex flex-col justify-center w-full">
          <form onSubmit={handleRegister}>
            <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
              <div class="absolute opacity-60 inset-0 z-0"></div>
              <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div class="grid  gap-8 grid-cols-1">
                  <div class="flex flex-col ">
                    <div class="form">
                      <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="ex: demo@gmail.com"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            User Password
                          </label>
                          <input
                            type="text"
                            name="password"
                            required
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="password"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 py-2">
                            User Role
                          </label>
                          <select
                            autocomplete="None"
                            onChange={onChange}
                            value={selectedRole.role}
                            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            required
                            name="role"
                          >
                            <option value={"user"}>User</option>
                            <option value={"editor"}>Editor</option>
                          </select>
                        </div>
                      </div>
                      <label class="inline-flex items-center mt-2">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                          class="form-checkbox h-5 w-5 text-red-600"
                        />
                        <span class="ml-2 text-gray-700">All</span>
                      </label>
                      <div class="md:grid grid lg:grid-cols-2 gap-4 w-full text-base">
                        <div>
                          <h1 class="text-2xl font-bold text-gray-800 dark:text-white my-1">
                            Report List
                          </h1>

                          <div className="grid lg:grid-cols-2 gap-2">
                            {menulist &&
                              filterMenuList(viewReport)?.map((menu) => (
                                <label class="inline-flex items-center mt-2">
                                  <input
                                    type="checkbox"
                                    checked={
                                      selectAll ||
                                      selectedItems.includes(menu.name)
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(menu.name)
                                    }
                                    class="form-checkbox h-5 w-5 text-red-600"
                                  />
                                  <span class="ml-2 text-gray-700">
                                    {menu.name}
                                  </span>
                                </label>
                              ))}
                          </div>
                        </div>
                        <div>
                          {selectedRole.role !== "user" && (
                            <h1 class="text-2xl font-bold text-gray-800 dark:text-white my-1">
                              Data Entry
                            </h1>
                          )}
                          <div className="grid lg:grid-cols-2 gap-2 pb-4">
                            {menulist &&
                              filterMenuList(addData)?.map((menu) => (
                                <label class="inline-flex items-center mt-2">
                                  <input
                                    type="checkbox"
                                    checked={
                                      selectAll ||
                                      selectedItems.includes(menu.name)
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(menu.name)
                                    }
                                    class="form-checkbox h-5 w-5 text-red-600"
                                  />
                                  <span class="ml-2 text-gray-700">
                                    {menu.name}
                                  </span>
                                </label>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                        <button
                          type="submit"
                          class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                        >
                          Create User
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default MySingUp;
