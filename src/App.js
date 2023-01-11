import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./Components/Header/Header";
import CourseDetails from "./Components/Courses/CourseDetails/CourseDetails";
import TeacherDetails from "./Components/Teachers/TeacherDetails/TeacherDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />
      </Routes>
    </div>
  );
}

export default App;
