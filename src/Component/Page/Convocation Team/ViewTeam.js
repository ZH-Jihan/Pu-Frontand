import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFatchData from "../../Hooks/useFatchData";

const ViewTeam = () => {
  const { data: allTeam } = useFatchData("/convocationTeam");
  const [nameWiseTable, setNameWiseTable] = useState(false);
  const [nameFilter, setNameFilter] = useState([]);
  const [selecteditem, setSelecteditem] = useState({
    committe: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setSelecteditem((prev) => ({ ...prev, [name]: value }));
    setNameFilter([])
  };
  const navigate = useNavigate()
  //**** Get All Name for deffrent proparty in array Of object and create new name Array ****//
  const uniqueValuesSet = new Set();
  const allName = allTeam.flatMap((el) => {
    const value = [el.teamLeader, el.teamSecretary, ...el.teamMember];
    return value.filter((value) => {
      if (!uniqueValuesSet.has(value)) {
        uniqueValuesSet.add(value);
        return true;
      }
      return false;
    });
  });

  const committe = Array.from(new Set(allTeam.map((el) => el.teamName)));
  let data;
  if (selecteditem.committe) {
    
    data = allTeam.filter((el) => el.teamName === selecteditem.committe);
    
  }else if (nameFilter.length){
    data = nameFilter
  }else {
    data = allTeam;
  }
console.log(nameFilter);
  
  if (nameWiseTable === true) {
    return (
      <div>
        <h2 className="font-bold text-2xl text-center pb-2">
          Convocation Committee List
        </h2>

        <div class="w-3/4 lg:w-1/4 m-auto flex flex-col mb-8">
          <label className="font-semibold text-gray-600 ">Click To See</label>
          <button
            style={{ "background-color": "#b5e8eb" }}
            onClick={() => setNameWiseTable(false)}
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          >
            Team Wise Details
          </button>
        </div>
        <div class="flex flex-col lg:w-2/4 m-auto">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead
                    class="bg-amber-200 border-b"
                    style={{ position: "sticky", top: "0" }}
                  >
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        Convener
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        Secretary
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-larg text-gray-900 px-2 py-4 text-left"
                      >
                        Member
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allName.map((name) => (
                      <tr className="hover striped">
                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {name}
                        </td>
                        <td  class="px-2 py-2 whitespace-nowrap text-base font-medium text-blue-700">
                          <button 
                          className="underline underline-offset-2"
                          onClick={()=>{setNameFilter(allTeam.filter((el) => el.teamLeader === name)); setNameWiseTable(false)}}>
                          {
                            allTeam.filter((el) => el.teamLeader === name)
                              .length
                          }
                          </button>
                        </td>
                        <td class="px-2 py-2 whitespace-nowrap text-base font-medium text-blue-700 ">
                          <button
                          className="underline underline-offset-2"
                          onClick={()=>{setNameFilter(allTeam.filter((el) => el.teamSecretary === name)); setNameWiseTable(false)}}>
                          {
                            allTeam.filter((el) => el.teamSecretary === name)
                              .length
                          }
                          </button>
                        </td>
                        <td class="px-2 py-2 whitespace-nowrap text-base font-medium text-blue-700">
                        <button 
                        className="underline underline-offset-2"
                        onClick={()=>{setNameFilter(allTeam.filter((el) => el.teamMember.includes(name))); setNameWiseTable(false)}}>
                          {
                            allTeam.filter((el) => el.teamMember.includes(name))
                              .length
                          }
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="font-bold text-2xl text-center pb-2">
          Convocation Team List
        </h2>
        <h2 className="font-bold text-xl text-center text-red-600 pb-2">
          Total Committee : {allTeam.length}
        </h2>
        <div className="grid lg:grid-cols-2 lg:w-2/4 m-auto">
          <div class="w-3/4  m-auto flex flex-col mb-2">
            <label className="font-semibold text-gray-600 py-2">Click To See</label>
            <button
              style={{ "background-color": "#b5e8eb" }}
              onClick={() => setNameWiseTable(true)}
              class="appearance-none text-lg block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            >
              Name Wise At A Glance
            </button>
          </div>
          <div class="w-3/4  m-auto flex flex-col mb-2">
            <label class="font-semibold text-gray-600 py-2">Committe</label>
            <select
              value={selecteditem.committe}
              onChange={onChange}
              autocomplete="None"
              placeholder="Department"
              class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              name="committe"
            >
              <option value={""}>--- Select ---</option>
              {committe?.map((optn) => (
                <option value={optn}>{optn}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
            {data?.map((team) => (
              <div
                style={{ width: "360px" }}
                className="card sm:w-96 bg-base-100 pt-4 rounded-2xl overflow-hidden shadow-2xl "
              >
                <div className="card-body">
                  <h2 className="font-bold text-2xl text-center">
                    {team?.teamName}
                  </h2>
                  <h2 className="text-lg">
                    <span className="text-xl font-bold">Convener : </span>
                    {team?.teamLeader}
                  </h2>
                  <h2 className="text-lg">
                    <span className="text-xl font-bold">Secretary : </span>
                    {team?.teamSecretary}
                  </h2>
                  <span className="text-lg  font-bold text-center">
                    Members{" "}- { team?.teamMember.length }
                  </span>
                  <h2 className="">
                    {team?.teamMember.slice(0, 5).map((member) => (
                      <p className="text-lg">{member}</p>
                    ))}
                  </h2>
                </div>
                <div className="card-actions text-center pt-4 ">
                  <button className="w-full pl-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
                  onClick={()=> navigate(`/viewteam/${team._id}`)}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ViewTeam;
