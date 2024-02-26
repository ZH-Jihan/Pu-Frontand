import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HostelMemberAdd from "./Component/Dashbord/HostelMemberAdd";
import CompanyInfo from "./Component/Page/About/CompanyInfo";
import AllDepartment from "./Component/Page/All Report/AllDepartment";
import RutinMainPage from "./Component/Page/All Report/Class Rutin/RutinMainPage";
import ClassRoomView from "./Component/Page/All Report/ClassRoomView";
import CreateUser from "./Component/Page/All Report/CreateUser";
import EditFaculty from "./Component/Page/All Report/Edit & Delete Info/Edit Info/EditFaculty";
import EntryAbsentReport from "./Component/Page/All Report/EntryAbsentReport";
import AllFacultys from "./Component/Page/All Report/Faculty List/AllFacultys";
import EmploeeyList from "./Component/Page/All Report/Faculty List/EmploeeyList";
import ExFaculty from "./Component/Page/All Report/Faculty List/ExFaculty";
import FacultyDetails from "./Component/Page/All Report/Faculty List/FacultyDetails";
import RoomWiseFaculty from "./Component/Page/All Report/Faculty List/RoomWiseFaculty";
import TClassDetail from "./Component/Page/All Report/FacultyClassList/TClassDetail";
import TeacherTotalClass from "./Component/Page/All Report/FacultyClassList/TeacherTotalClass";
import HostelMember from "./Component/Page/All Report/HostelMember";
import JurnalView from "./Component/Page/All Report/JurnalView";
import AllCourse from "./Component/Page/All Report/Program Wise Detail/AllCourse";
import AllProgram from "./Component/Page/All Report/Program Wise Detail/AllProgram";
import RegStuDetails from "./Component/Page/All Report/Program Wise Detail/RegStuDetails";
import ProgramWiseCount from "./Component/Page/All Report/ProgramWiseCount";
import TotalStudentReport from "./Component/Page/All Report/TotalStudentReport";
import TutionFee from "./Component/Page/All Report/TutionFee";
import ViewAbsentReport from "./Component/Page/All Report/ViewAbsentReport";
import AdmissonFrom from "./Component/Page/Apply From/AdmissonFrom";
import RegistrationFrom from "./Component/Page/Apply From/RegistrationFrom";
import NewHomePageV2 from "./Component/Page/Home/NewHomePageV2";
import MyRequireAuth from "./Component/Page/Security/MyRequireAuth";
import Notpound from "./Component/Page/Sheared Page/Notpound";
import MyLogin from "./Component/Page/SingUp & Login/MyLogin";
import MySingUp from "./Component/Page/SingUp & Login/MySingUp";
import Unothorize from "./Component/Page/SingUp & Login/Unothorize";
// axios.defaults.url("http://localhost:5000/api/v1")
// const token = Cookies.get('token')
    
    // const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    // const decodedData = JSON.parse(atob(token.split('.')[1]));
    // console.log(decodedData);

function App() {
  
  return (
    <>
      <div>
        {/* <Navber></Navber> */}
        <Routes>
          {/* Main Open Page */}
          <Route path="/" element={<MyRequireAuth><NewHomePageV2/></MyRequireAuth>}>
            
            {/* Faculty Total Class */}
            <Route path="/teacherclass"  element={<TeacherTotalClass />} />
            <Route path="/teacherclass/:id" element={<TClassDetail />} />

            {/* Program Wise Total Class */}
            <Route path="/programClasscount" element={<ProgramWiseCount />} />

            {/* Faculty Class absent Check */}
            <Route path="/absentreportview" element={<ViewAbsentReport />} />

            {/* All Faculty List & Details */}
            
            <Route path="/faculty" element={<AllFacultys/>}/>
            <Route path="/faculty/:id" element={<FacultyDetails />} />
            <Route path="/updatefaculty/:id" element={<EditFaculty />} />
            <Route path="/roomwisefaculty" element={<RoomWiseFaculty/>}/>
            
            <Route path="/emploeey" element={<EmploeeyList />} />
            <Route path="/exemploeey" element={<ExFaculty />} />

            {/* Program List Wise Details */}
            <Route path="/program" element={<AllProgram />} />
            <Route path="/courses/:id" element={<AllCourse />} />
            <Route path="/regstudetails/:id" element={<RegStuDetails />} />

            {/* Student Info Addmission & Reg */}
            <Route path="/studentAnalyze" element={<TotalStudentReport />} />
            
            {/* Student Tution Fee Info */}
            <Route path="/tutionfee" element={<TutionFee/>} />

            {/* Faculty Absent Report Entry */}
            <Route path="/absentreportentry" element={<EntryAbsentReport />} />

            {/* Department List */}
            <Route path="/department" element={<AllDepartment />} />

            {/* Class Room List */}
            <Route path="/classroom" element={<ClassRoomView />} />

            {/* Jurnal View List */}
            <Route path="/viewJournal" element={<JurnalView />} />

            {/* Addmission From */}
            <Route path="/admisonfrom" element={<AdmissonFrom />} />

            {/* Regester From */}
            <Route path="/registarfrom" element={<RegistrationFrom />} />
            <Route path="/routine" element={<RutinMainPage />}></Route>
            
            <Route path="/createuser" element={ <CreateUser/>}></Route>

            <Route path="/hostelmember" element={ <HostelMember/>}></Route>

            <Route path="/addhostelmember" element={ <HostelMemberAdd/>}></Route>
            
            <Route path="*" element={<Notpound></Notpound>}></Route>
            <Route path="/unothorize" element={<Unothorize/>}></Route>
            
          </Route>
          
            {/* <Route path="/login" element={<Login />}></Route> */}
            <Route path="/mylogin" element={<MyLogin/>}></Route>
            <Route path="/about" element={<CompanyInfo />}></Route>
            <Route path="/mysingup" element={<MySingUp/>}></Route>
          {/* Class Rutin Related Page */}
          {/* <Route path="/classrutin" element={<HomePage/>}/> */}
        </Routes>

        {/* <Footer></Footer> */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
