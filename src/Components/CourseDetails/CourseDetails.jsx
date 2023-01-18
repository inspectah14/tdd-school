import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchLists from "../../hooks/useFetchLists";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  margin: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 0 20px 20px 20px;
  background: whitesmoke;
`;

const H2 = styled.h2`
  margin: 20px 0 0 0;
`;

const StyledText = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  const { data, error } = useFetchLists(`http://localhost:3010/courses/${id}`);

  useEffect(() => {
    if (data) {
      setCourse(data);
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
          <ContentWrapper key={course.id}>
            <H2> {course.title} </H2>
            <StyledText>
              <strong>Course ID: </strong>
              {course.id}
            </StyledText>
            <StyledText>
              <strong>Course length: </strong> {course.length} weeks
            </StyledText>
            <StyledText>
              <strong>Start date: </strong> {course.startDate}
            </StyledText>
            <StyledText>
              <strong>Description: </strong>
              {course.descr}
            </StyledText>
          </ContentWrapper>
        </StyledWrapper>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default CourseDetails;
