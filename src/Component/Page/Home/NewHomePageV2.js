import {
  faBan,
  faBarsProgress,
  faCalendarDays,
  faChartPie,
  faCodeBranch,
  faFilePen,
  faHouseCircleCheck,
  faMoneyBillTrendUp,
  faNewspaper,
  faPerson,
  faRectangleList,
  faRectangleXmark,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/Admin";
import Loading from "../Sheared Page/Loading";

const NewHomePageV2 = () => {
  //** 1st way how to add script link in react file **//
  // const script = document.createElement("script");
  // script.src = "https://buttons.github.io/buttons.js";
  // script.src = "https://demo.themesberg.com/windster/app.bundle.js";
  // script.async = true;
  // document.body.appendChild(script);
  //** End 1st way 2nd way method show bottom of this file  **//

  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  //** Report list array **/
  const reports = [
    {
      name: "Routine",
      icon: faCalendarDays,
      navigate: "/routine",
      permission: "user",
    },
    {
      name: "All Faculty",
      icon: faUsers,
      navigate: "/faculty",
      permission: "user",
    },
    {
      name: "All Employee",
      icon: faPerson,
      navigate: "/emploeey",
      permission: "user",
    },
    {
      name: "Admission Analyze",
      icon: faChartPie,
      navigate: "/studentAnalyze",
      permission: "user",
    },
    {
      name: "Credit Fee Analyze",
      icon: faMoneyBillTrendUp,
      navigate: "/tutionfee",
      permission: "user",
    },
    {
      name: "Create User",
      icon: faMoneyBillTrendUp,
      navigate: "/createuser",
      permission: "admin",
    },
    {
      name: "Faculty Wise Class",
      icon: faRectangleList,
      navigate: "/teacherclass",
      permission: "admin",
    },
    {
      name: "Check Faculty Absent",
      icon: faRectangleXmark,
      navigate: "/absentreportview",
      permission: "admin",
    },
    {
      name: "Program Wise Details",
      icon: faCodeBranch,
      navigate: "/program",
      permission: "admin",
    },
    {
      name: "Program Wise Class",
      icon: faBarsProgress,
      navigate: "/programClasscount",
      permission: "admin",
    },
    {
      name: "Class Room List",
      icon: faHouseCircleCheck,
      navigate: "/classroom",
      permission: "user",
    },
    {
      name: "Faculty Absent Entry",
      icon: faBan,
      navigate: "/absentreportentry",
      permission: "admin",
    },
    {
      name: "Journal View",
      icon: faNewspaper,
      navigate: "/viewJournal",
      permission: "admin",
    },
    {
      name: "Admission Form",
      icon: faFilePen,
      navigate: "/admisonfrom",
      permission: "admin",
    },
    {
      name: "Regester Form",
      icon: faFilePen,
      navigate: "/registarfrom",
      permission: "admin",
    },
  ];

  const filterUserAccess = () => {
    let filterReport;
    if (user) {
      filterReport = reports.filter((el) => el.permission === "user");
    }
    if (admin) {
      filterReport = reports;
    }
    return filterReport;
  };
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
                    <button
                      className="btn btn-ghost"
                      onClick={() => {
                        signOut(auth);
                      }}
                    >
                      {user ? "Log Out" : "LogIN"}
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
                  <div class="flex-1 px-3 bg-white divide-y space-y-1">
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
                      {filterUserAccess().map((report) => (
                        <li>
                          <a
                            href={report.navigate}
                            class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                          >
                            <FontAwesomeIcon
                              class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                              fill="currentColor"
                              icon={report.icon}
                            />
                            <span class="ml-3">{report.name}</span>
                          </a>
                        </li>
                      ))}
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
