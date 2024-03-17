import moment from "moment";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";
import Loading from "../../Sheared Page/Loading";
const DetailsHostelMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useFatchData(`/hostelmember/${id}`);
  let member;
  if (data.status === "Success") {
    member = data.data[0];
  }
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div class="lg:pt-8">
        <div class="w-3/4  px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col-reverse md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div className="grid lg:grid-cols-2">
              <img
                  class="w-48 h-44 lg:pt-4"
                  src="https://res.cloudinary.com/dgctadcb2/image/upload/v1710672276/qllzxq5dyhcaotylvzag.jpg"
                  alt="Student Image"
                />
                <div>
                
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {member?.name}
                  </h2>
                  <div>
                  <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Academic Info
                  </h1>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Id - {member?.id}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Number - {member?.number}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Department - {member?.department}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Batch - {member?.batch}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Semester - {member?.semester}
                  </p>
                  </div>
                </div>
                
              </div>
              <div class="grid lg:grid-cols-2 mb-4 lg:mt-4">
                
                <div>
                  <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Guardian Info
                  </h1>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Father - {`${member?.father} ( ${member?.fathernumber} )`}{" "}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Mother - {`${member?.mother} ( ${member?.mothernumber} )`}{" "}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Local Guardians - {member?.localguardian}{" "}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Number - {member?.localguardiannumber}{" "}
                  </p>
                </div>
                <div class="mr-4">
                  <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Hostel Info
                  </h1>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Flate - {member?.flate}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Room - {member?.room}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Seat - {member?.seat}
                  </p>
                  <p class="text-gray-700 dark:text-gray-300 text-lg ">
                    Join Date - {moment(member?.joinDate).format("ll")}
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
    );
  }
};

export default DetailsHostelMember;
