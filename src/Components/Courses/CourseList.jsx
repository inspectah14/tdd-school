import { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import useFetch from "../../hooks/useFetch";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AuthContext);

  const { data, error } = useFetch("http://localhost:3010/courses");

  useEffect(() => {
    if (data) {
      setCourses(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <section>
      <h2>List of Available Courses</h2>
      {courses.map((course) => (
        <div key={course.courseId}>
          <h3>
            {course.title} - ID: {course.courseId}
          </h3>
          <p>Course length: {course.length} </p>
          <p>Course start date: {course.startDate} </p>
        </div>
      ))}
    </section>
  );
};

export default CourseList;
