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

const H3 = styled.h3`
  margin: 10px 0 0 0;
`;

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();

  const { data, error } = useFetchLists("http://localhost:3010/teachers");

  useEffect(() => {
    if (data) {
      const teacherDetails = data.find(
        (teacher) => teacher.teacherId === Number(id)
      );
      setTeacher(teacherDetails);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <>
      {teacher ? (
        <StyledWrapper>
          <H2>
            {teacher.firstName} {teacher.lastName}
          </H2>
          <div key={teacher.teacherId}>
            <p>Social Security Number: {teacher.socialNumber} </p>
            <p>Email: {teacher.email} </p>
            <p>Phone: {teacher.phone} </p>
          </div>
          <H3>Competence Areas</H3>
          {teacher.competencies?.map((comp, i) => (
            <div key={i}>
              <p>{comp}</p>
            </div>
          ))}
        </StyledWrapper>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default TeacherDetails;
