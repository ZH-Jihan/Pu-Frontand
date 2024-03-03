import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useFatchData from '../../../../Hooks/useFatchData';

const EditHostelMember = () => {
    const {id} = useParams();
    const testUrl = `http://localhost:5000/api/v1/hostelmember/${id}`
    const mainUrl = `https://pu-server-1.onrender.com/api/v1/faculty/${id}`
    const {data:mamber,error} = useFatchData(testUrl);
   
    const [update, setUpdate] = useState({});
    const navigate = useNavigate()

    if (mamber.length) {
        if (!update.name) {
          setUpdate(mamber[0])
        }
      }
      const joinDate = moment(update?.joinDate).format("YYYY-MM-DD");
      const onChange = (e) => {
        const { name, value } = e.target;
        setUpdate((prev) => ({ ...prev, [name]: value }));
      };

      const updateMember = async (event) =>{
        event.preventDefault();
console.log(update);
        const token = JSON.parse(localStorage.getItem('authToken'))?.token
        console.log(token);
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      };
      const respons = await axios.put(testUrl,update,{headers})
      if (respons.data.status) {
        toast.success(respons.data.status)
        setUpdate({})
        navigate("/womenhostel")
      }
      }
    return (
        <div>
            <form onSubmit={updateMember}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Update Hostel Member{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Student Id
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Student Id"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          onChange={onChange}
                          value={update.id}
                          disabled
                          type="text"
                          name="id"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Student Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          value ={update.name || ""}
                          onChange={onChange}
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="name"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Flat Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Input Flat Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          onChange={onChange}
                          value={update.flate || ""}
                          name="flate"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Room Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Room Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          onChange={onChange}
                          value={update.room || ""}
                          type="text"
                          name="room"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Seat Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Seat Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          onChange={onChange}
                          value={update.seat || ""}
                          name="seat"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Join Date
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder=""
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="date"
                          onChange={onChange}
                          value={joinDate}
                          name="joinDate"
                        />
                      </div>
                    </div>
                    <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="submit"
                        class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Save
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

export default EditHostelMember;