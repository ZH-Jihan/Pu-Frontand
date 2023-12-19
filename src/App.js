import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import useAdmin from "./Component/Hooks/Admin";
import CompanyInfo from "./Component/Page/About/CompanyInfo";
import AllDepartment from "./Component/Page/All Report/AllDepartment";
import RutinMainPage from "./Component/Page/All Report/Class Rutin/RutinMainPage";
import ClassRoomView from "./Component/Page/All Report/ClassRoomView";
import CreateUser from "./Component/Page/All Report/CreateUser";
import EntryAbsentReport from "./Component/Page/All Report/EntryAbsentReport";
import AllFacultys from "./Component/Page/All Report/Faculty List/AllFacultys";
import FacultyDetails from "./Component/Page/All Report/Faculty List/FacultyDetails";
import TClassDetail from "./Component/Page/All Report/FacultyClassList/TClassDetail";
import TeacherTotalClass from "./Component/Page/All Report/FacultyClassList/TeacherTotalClass";
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
import CheckUser from "./Component/Page/Security/CheckUser";
import RequireAuth from "./Component/Page/Security/RequireAuth";
import Notpound from "./Component/Page/Sheared Page/Notpound";
import Login from "./Component/Page/SingUp & Login/Login";
import auth from "./firebase.init";
// axios.defaults.url("http://localhost:5000/api/v1")

function App() {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <div>
        {/* <Navber></Navber> */}
        <Routes>
          {/* Main Open Page */}
          <Route path="/checkuser" element={<CheckUser/>}/>
          <Route path="/" element={<RequireAuth><NewHomePageV2/></RequireAuth>}>
            {/* Faculty Total Class */}
            <Route path="/teacherclass"  element={<TeacherTotalClass />} />
            <Route path="/teacherclass/:id" element={<TClassDetail />} />

            {/* Program Wise Total Class */}
            <Route path="/programClasscount" element={<ProgramWiseCount />} />

            {/* Faculty Class absent Check */}
            <Route path="/absentreportview" element={<ViewAbsentReport />} />

            {/* All Faculty List & Details */}
            
            <Route path="/faculty" index element={<AllFacultys />} />
            <Route path="/faculty/:id" element={<FacultyDetails />} />

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
            
            <Route path="/createuser" element={ admin &&  <CreateUser/>}></Route>
            
            <Route path="*" element={<Notpound></Notpound>}></Route>
          </Route>
          
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<CompanyInfo />}></Route>
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
