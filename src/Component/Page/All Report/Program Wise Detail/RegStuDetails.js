import { useParams } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";

const RegStuDetails = () => {
  const {data:studentsinfo} = useFatchData('https://pu-server-1.onrender.com/regstudent');
  const { id } = useParams();

  const filterStudent = (datas = []) => {
    let data = datas;
    if (id) {
      if (id === "BA IN ENGLISH") {
        data = studentsinfo.filter((el) => el.programName === "ENG");
      } else if (id === "MA IN ELT") {
        data = studentsinfo.filter((el) => el.programName === "MAELT");
      } else data = studentsinfo.filter((el) => el.programName === id);
    }
    return data;
  };

  return (
    <div className="mx-2 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2">Regester Student List</h1>
      </div>
      <p className="text-xl text-red-500 text-center font-bold py-4">
        {id} Total Student : {filterStudent(studentsinfo).length}
      </p>

      <table class="min-w-full border-collapse block md:table">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name Of Student
            </th>
            {/* <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Student ID
            </th> */}
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Phone
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Gender
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {filterStudent(studentsinfo).map((student) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Name of Student
                </span>
                {student.StudentName}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Phone Number
                </span>
                0{student.SMS}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Gender
                </span>
                {student.Sex}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegStuDetails;
