import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  const { data, error } = useFetchLists("http://localhost:3010/courses");

  useEffect(() => {
    if (data) {
      const courseDetails = data.find((course) => course.id === Number(id));
      setCourse(courseDetails);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <>
      {course ? (
        <StyledWrapper>
          <H2> {course.title} </H2>
          <div key={course.id}>
            <p>Course ID: {course.id} </p>
            <p>Course length: {course.length} </p>
            <p>Start date: {course.startDate} </p>
            <p>Description: {course.descr} </p>
          </div>
        </StyledWrapper>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default CourseDetails;
