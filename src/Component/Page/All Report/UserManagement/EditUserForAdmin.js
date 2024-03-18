import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import menuList from "../../../../data/menuList.json";
import PutCustomAxios from "../../../Hooks/PutCustomAxios";
import useFatchData from "../../../Hooks/useFatchData";

const EditUserForAdmin = () => {
  const { id } = useParams();
  const { data: userInfo } = useFatchData(`/user/${id}`);
  const [update, setUpdate] = useState({});
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prev) => ({ ...prev, [name]: value }));
  }; 
  const viewReport = menuList[0]?.value;
  const addData = menuList[1]?.value;
  let menulist;
  if (viewReport && addData) {
    menulist = viewReport.concat(addData);
  }

  const filterMenuList = (value) => {
    let menu;
    if (update?.role && menuList) {
      menu = value.filter((el) => el.role.includes(update.role));
    }
    return menu;
  };
  if (!selectedItems?.length && update?.permission) {
    setSelectedItems(update?.permission)
}
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
    setSelectedItems(selectAll ? [] : filterMenuList(menulist).map(item => item.name));
  };





  if (userInfo.status) {
    if (!update.name) {
      setUpdate(userInfo.data);
    }
  }
  
  const updateUserInfo = async(event) => {
    event.preventDefault();
    const updatedata = {...update, permission:selectedItems }
    
    const respons = await PutCustomAxios(`/user/${id}`, updatedata);

    if (respons.status) {
      toast.success(respons.status);
      setUpdate({});
      navigate("/alluser");
    }

  };
  return (
    <div>
      <form onSubmit={updateUserInfo}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Update User Permission{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          User Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          value={update.name || ""}
                          onChange={onChange}
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="name"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          User Email
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          value={update.email || ""}
                          onChange={onChange}
                          disabled
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="email"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          User Role
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          value={update.role || ""}
                          onChange={onChange}
                          disabled
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="role"
                        />
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
                          {update.role !== "user" && (
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
                    <div class=" mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="button"
                        class="mb-2 md:mb-0 bg-slate-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-orange-400"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        class=" mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Update
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

export default EditUserForAdmin;
