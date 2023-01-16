import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import CourseDetails from "./Components/Courses/CourseDetails/CourseDetails";
import TeacherDetails from "./Components/Teachers/TeacherDetails/TeacherDetails";
import AddCourses from "./Screens/AddCourses/AddCourses";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />
        <Route path="/addcourses" element={<AddCourses />} />
      </Routes>
    </div>
  );
}

export default App;
