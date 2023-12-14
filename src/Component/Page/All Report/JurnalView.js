import React from "react";

const thade = [
  { name: "Artical Name" },
  { name: "Publis Date" },
  { name: "Journal/Paper Name" },
  { name: "Grade" },
  { name: "Link" },
  { name: "Pdf" },
  { name: "Author/CoAuthor" },
];
const JurnalView = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-center mt-5">Artical</h1>
      <div className="my-5 text-center">
        <span className="font-base text-2xl">Faculty ID : </span> 
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-amber-200 border-b">
                    <tr>
                      {thade.map((th) => (
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          {th.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurnalView;
