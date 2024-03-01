import React from "react";
import { Helmet } from "react-helmet";
import { Outlet, useNavigate } from "react-router-dom";
import useFatchData from "../../Hooks/useFatchData";
import FontWosamIcon from "../../Utilits/FontWosamIcon";
import { getUserRole } from "../Security/myAuth";
import Loading from "../Sheared Page/Loading";

const NewHomePageV2 = () => {
  //** 1st way how to add script link in react file **//
  // const script = document.createElement("script");
  // script.src = "https://buttons.github.io/buttons.js";
  // script.src = "https://demo.themesberg.com/windster/app.bundle.js";
  // script.async = true;
  // document.body.appendChild(script);
  //** End 1st way 2nd way method show bottom of this file  **//
  const { data: reports, loading } = useFatchData("menuList.json");
  const viewReport = reports[0]?.value;
  const addData = reports[1]?.value;

console.log(viewReport);
  const userDat = getUserRole();
  const navigate = useNavigate();

  const logouthandelar = () => {
    localStorage.removeItem('authToken')
            navigate("/mylogin");
    // axios
    //   .post("http://localhost:5000/api/v1/user/logout", userDat.data)
    //   .then((respons) => {
    //     try {
    //       if (respons.status) {
    //         localStorage.removeItem('authToken')
    //         navigate("/mylogin");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   });
  };

  const filterUserAccess = (value) => {
    let filterReportPermission;
    let filterReportrole;
    if (userDat.role) {
      filterReportrole = value?.filter((el) => el.role.includes(userDat.role));
    }
    if (userDat.role === "admin") {
      filterReportrole = value;
    }
    if (userDat.role === "user" || userDat.role === "editor") {
      filterReportPermission = filterReportrole?.filter((el) =>
        userDat.permission.includes(el.name));
      return filterReportPermission;
    }
    return filterReportrole;
  };
console.log(filterUserAccess(viewReport));
  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div>
        <div>
          <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                  <button
                    id="toggleSidebarMobile"
                    aria-expanded="true"
                    aria-controls="sidebar"
                    class="btn btn-ghost lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  >
                    <svg
                      id="toggleSidebarMobileHamburger"
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      id="toggleSidebarMobileClose"
                      class="w-6 h-6 hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <a
                    href="/"
                    class="text-xl font-bold flex items-center lg:ml-2.5"
                  >
                    <img
                      src="https://i.ibb.co/6XHn9Dm/pu-logo-1-1.png"
                      class="h-6 mr-2"
                      alt="Windster Logo"
                    />
                    <span class="self-center whitespace-nowrap">PU MIS</span>
                  </a>
                </div>

                <div class="flex items-center">
                  <button
                    id="toggleSidebarMobileSearch"
                    type="button"
                    class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    <span class="sr-only">Search</span>
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div>
                    <button className="btn btn-ghost" onClick={logouthandelar}>
                      {userDat ? "Log Out" : "LogIN"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="flex overflow-hidden bg-white pt-16">
            <aside
              id="sidebar"
              class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col  transition-width duration-75"
              aria-label="Sidebar"
            >
              <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="dropdown dropdown-open">
                    <ul class="space-y-2 pb-2">
                      <li>
                        <form action="#" method="GET" class="lg:hidden">
                          <label for="mobile-search" class="sr-only">
                            Search
                          </label>
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                class="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                              </svg>
                            </div>
                            <input
                              type="text"
                              name="email"
                              id="mobile-search"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                              placeholder="Search"
                            />
                          </div>
                        </form>
                      </li>
                      <details className="mx-8 " open>
                        <summary>View Reports</summary>
                        <ul>
                          {filterUserAccess(viewReport)?.map((report) => (
                            <li>
                              <a
                                href={report.navigate}
                                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                              >
                                <FontWosamIcon name={report.name} />
                                <span class="ml-3">{report.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                      {userDat.role === "admin" || userDat.role === "editor" ?
                        <details className="mx-8" open>
                        <summary>Entry Data For Report</summary>
                        <ul>
                          {filterUserAccess(addData)?.map((report) => (
                            <li>
                              <a
                                href={report.navigate}
                                class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                              >
                                <FontWosamIcon name={report.name} />
                                <span class="ml-3">{report.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>:""}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div
              class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              class="h-full w-full pt-8 bg-gray-50 relative overflow-y-auto lg:ml-52 lg:mr-2"
            >
              <Outlet></Outlet>
            </div>
          </div>
        </div>

        {/* 2nd Way to add script link in react file  */}
        <Helmet>
          <script
            async
            defer
            src="https://buttons.github.io/buttons.js"
          ></script>
          <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
        </Helmet>
      </div>
    );
  }
};

export default NewHomePageV2;
