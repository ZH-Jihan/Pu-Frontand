import React, { useState } from 'react';
import useFatchData from '../../Hooks/useFatchData';

const AllDepartment = () => {
  const {data:departments} = useFatchData('/department');
  const [selecteditem,setSelecteditem] = useState({
    department:""
  })
  const handleInputChange=(e)=>{
    const {name,value} = e.target;
    setSelecteditem((prev)=>({...prev, [name]: value}))
  }
  const filterDtype = (departments=[])=>{
    let data = departments;
    if (selecteditem.department) {
      data = data.filter((el)=> el.type === selecteditem.department )
    }
    return data;
  }
  // const tableHead = [
  //   {field:"",header:""},
  // ]
  return (
    <div className="mx-2">
      <p className='text-center font-bold text-3xl my-8'>Department List</p>
      <p className='text-xl text-red-500 text-center font-bold py-4'>Total department : {filterDtype(departments).length}</p>
      <div class="lg:w-1/4  m-auto flex flex-col mb-8">
        <label class="font-semibold text-gray-600 py-2">Department</label>
        <select
          value={selecteditem.department}
          onChange={handleInputChange}
          autocomplete="None"
          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          type="text"
          name="department"
        >
          <option value={""}>--All Department--</option>
          <option value={"Acadimic"}>Acadimic</option>
          <option value={"Other"}>Other</option>
          
        </select>
      </div>
      <table class="min-w-full border-collapse block md:table">
        <thead style={{color:'#042488'}} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name Of Departments
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Department ID
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Department Type
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Status
            </th>
            {/* {
              admin && (
                <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
              )
            } */}
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          { 
           filterDtype(departments).map((department) =>(
                <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Department Name</span>
                    {department.name}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                      Department ID
                    </span>
                    {department.id}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Status</span>
                    {department.type}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Status</span>
                    {department.description}
                  </td>
                  {/* {
                    admin && (
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                      Actions
                    </span>
                    <button class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
                    </button>
                    <button class="ml-8 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                    )
                  } */}
                </tr>
                  ))
                }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllDepartment;