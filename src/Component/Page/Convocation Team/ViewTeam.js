import React from "react";
import useFatchData from "../../Hooks/useFatchData";

const ViewTeam = () => {
  const { data: allTeam } = useFatchData("/convocationTeam");
  console.log(allTeam);
  return (
    <div>
      <h2 className="font-bold text-2xl text-center pb-2">
        Convocation Team List
      </h2>
      <div>
        <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
          {allTeam?.map((team) => (
            <div
              style={{ width: "360px" }}
              className="card sm:w-96 bg-base-100 pt-4 rounded-2xl overflow-hidden shadow-2xl "
            >
              <div className="card-body">
                <h2 className="font-bold text-2xl text-center">
                  {team?.teamName}
                </h2>
                <h2 className="text-lg">
                  <span className="text-xl font-bold">Leader : </span>
                  {team?.teamLeader}
                </h2>
                <span className="text-lg  font-bold text-center">Member </span>
                <h2 className="">
                  
                  {team?.teamMember.map((member) => (
                    <p className="text-lg">{member}</p>
                  ))}
                </h2>
              </div>
              {/* <div className="card-actions text-center pt-4 ">
                <button className="w-full pl-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                  Details
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
