import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFatchData from "../../Hooks/useFatchData";

const TeamDetails = () => {
  const { id } = useParams();
  const { data: team } = useFatchData(`/convocationTeam/${id}`);
  const navigate = useNavigate();
  return (
    <div>
      <div class="lg:pt-8">
        <div class="w-4/4  px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center ">
                    {team?.teamName}
                  </h1>
          <div class="flex flex-col-reverse md:flex-row -mx-4">
          
            <div class="md:flex-1 px-4">
              
              <div class="grid lg:grid-cols-2 mb-4 ">
                <div>
                  <h2 className="text-lg">
                    <span className="text-xl font-bold">Convener : </span>
                    {team?.teamLeader}
                  </h2>
                  <h2 className="text-lg">
                    <span className="text-xl font-bold">Secretary : </span>
                    {team?.teamSecretary}
                  </h2>
                  <span className="text-lg  font-bold text-center">
                    Member{" "}
                  </span>
                  <h2 className="">
                    {team?.teamMember?.map((member) => (
                      <p className="text-lg">{member}</p>
                    ))}
                  </h2>
                </div>
                <div class="mr-4">
                  <h1 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Commitee Responsibilities
                  </h1>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    {team.responsibility}
                  </p>
                </div>
              </div>

              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <button
                    class="w-2/4 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {order && <Booking product={product} order={order} setOrder={setOrder}></Booking>} */}
      </div>
    </div>
  );
};

export default TeamDetails;
