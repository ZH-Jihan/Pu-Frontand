import React from "react";
import useFatchData from "../../../Hooks/useFatchData";

const LogInUserInfo = () => {
  const { data: userInfo } = useFatchData("/user/current");
  const user = userInfo.data;
  return (
    <div class="bg-white overflow-hidden shadow rounded-lg border lg:w-2/4 m-auto">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the login user.
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-3 sm:py-5 grid grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0">
              {user?.name}
            </dd>
          </div>
          <div class="py-3 sm:py-5 grid grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.email}
            </dd>
          </div>
          <div class="py-3 sm:py-5 grid grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Role</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.role}
            </dd>
          </div>
          <div class="py-3 sm:py-5 grid grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Status</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user?.status}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default LogInUserInfo;
