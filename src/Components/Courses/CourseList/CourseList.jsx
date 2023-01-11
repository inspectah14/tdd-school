import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import useFetchLists from "../../../hooks/useFetchLists";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 70%;
  border: 2px solid black;
  border-radius: 5px;
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const H2 = styled.h2`
  margin: 20px 0 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CourseList = (props) => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AuthContext);

  const { data, error } = useFetchLists("http://localhost:3010/courses");

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
    <StyledWrapper>
      <H2>Available Courses</H2>
      {courses.map((course) => (
        <StyledLink to={`/course/${course.courseId}`} key={course.courseId}>
          <div>
            <h3>
              {course.title} - ID: {course.courseId}
            </h3>
            <p>Course length: {course.length} </p>
            <p>Course start date: {course.startDate} </p>
          </div>
        </StyledLink>
      ))}
    </StyledWrapper>
  );
};

export default CourseList;
