import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import ListComponent from "../ListComponent/ListComponent";

const StyledWrapper = styled.div`
  width: 70%;
  border: 2px solid black;
  border-radius: 5px;
  margin: 50px 0 20px 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: whitesmoke;
`;

const H2 = styled.h2`
  margin: 20px 0 0 0;
`;

const Lists = () => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const { data: courseData, error: courseError } = useFetch({
    url: "http://localhost:3010/courses",
    type: "courses",
  });

  const { data: teacherData, error: teacherError } = useFetch({
    url: "http://localhost:3010/teachers",
    type: "teachers",
  });

  useEffect(() => {
    if (courseData) {
      setCourses(courseData.data);
    }
  }, [courseData]);

  useEffect(() => {
    if (teacherData) {
      setTeachers(teacherData.data);
    }
  }, [teacherData]);

  useEffect(() => {
    if (courseError && teacherError) {
      console.log(courseError);
      console.log(teacherError);
    }
  }, [courseError, teacherError]);

  return (
    <>
      <StyledWrapper>
        <H2>Available Courses</H2>
        <ListComponent courses={courses} />
      </StyledWrapper>
      <StyledWrapper>
        <H2>Teachers</H2>
        <ListComponent teachers={teachers} />
      </StyledWrapper>
    </>
  );
};

export default Lists;
