import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useFatchData from "../../Hooks/useFatchData";
import Button from "../../Utilits/Button";
import Loading from "../Sheared Page/Loading";

const MySingUp = () => {
  const { data: menuList ,loading} = useFatchData("menuList.json");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRole, setSelectRole] = useState({
    role: "user",
  });
  const viewReport = menuList[0]?.value;
  const addData = menuList[1]?.value;
  let menulist ;
  console.log(selectedItems);
if (loading === false) {
  
 menulist = viewReport.concat(addData)
}
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setSelectRole((prev) => ({ ...prev, [name]: value }));
  };
  const roleBtn = {
    btnHade: "Select Role",
    btnvalue: selectedRole.role,
    function: { onChange },
    btnName: "role",
    option: [
      { value: "user", name: "User" },
      { value: "editor", name: "Editor" },
    ],
  };

  const filterMenuList = (value) => {
    let menu;
    if (selectedRole.role && loading === false) {
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
    setSelectedItems(selectAll ? [] : filterMenuList(menulist).map(item => item.name));
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
      permission:selectedItems
    };
    const respons = await axios.post("https://pu-server-1.onrender.com/api/v1/user/singup",JSON.stringify(newUser),{
      headers: { 'Content-Type': 'application/json' }
    })
    if (respons?.data?.status === "Success") {
      toast.success("Successfully Create User")
      setSelectAll(false)
      setSelectedItems([])
      setSelectRole({ role :"user"})
    }
    event.target.reset()
  };
  if (loading === true) {
    return <Loading/>
  }else{
  return (
    <div>
      <div class=" bg-gray-100 py-6 flex flex-col justify-center w-full">
        <div class="relative py-3  sm:mx-auto">
          <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class=" mx-auto">
              <div class="flex items-center space-x-5">
                <div class="h-8 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">Create A User</h2>
                </div>
              </div>
              <form onSubmit={handleRegister}>
                <div class="divide-y divide-gray-200">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="flex flex-col">
                        <label class="leading-loose">User Name</label>
                        <input
                          type="text"
                          name="name"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">User Email</label>
                        <input
                          type="email"
                          name="email"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="ex: demo@gmail.com"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">User Password</label>
                        <input
                          type="text"
                          name="password"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="password"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button details={roleBtn} />
                      <div className="grid lg:grid-cols-3 gap-2">
                      <label class="inline-flex items-center mt-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              class="form-checkbox h-5 w-5 text-red-600"
                            />
                            <span class="ml-2 text-gray-700">All</span>
                          </label>
                        {menulist && filterMenuList(menulist)?.map((menu) => (
                          <label class="inline-flex items-center mt-2">
                            <input
                              type="checkbox"
                              checked={selectAll || selectedItems.includes(menu.name)}
                              onChange={() => handleCheckboxChange(menu.name)}
                              class="form-checkbox h-5 w-5 text-red-600"
                            />
                            <span class="ml-2 text-gray-700">{menu.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 flex items-center space-x-4">
                    <button
                      type="submit"
                      class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default MySingUp;
