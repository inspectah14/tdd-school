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
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 0 20px 20px 20px;
`;

const StyledText = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

const H2 = styled.h2`
  margin: 20px 0;
`;

const H3 = styled.h3`
  margin: 10px 0;
`;

const TeacherDetails = () => {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();

  const { data, error } = useFetchLists(`http://localhost:3010/teachers/${id}`);

  useEffect(() => {
    if (data) {
      setTeacher(data);
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
          <ContentWrapper key={teacher.id}>
            <H2>
              {teacher.firstName} {teacher.lastName}
            </H2>
            <StyledText>
              <strong>Social Security Number: </strong>
              {teacher.socialNumber}
            </StyledText>
            <StyledText>
              <strong>Email: </strong> {teacher.email}
            </StyledText>
            <StyledText>
              <strong>Phone: </strong> {teacher.phone}
            </StyledText>
            <H3>Competence Areas</H3>
            {teacher.competencies?.map((comp, i) => (
              <div key={i}>
                <StyledText>{comp}</StyledText>
              </div>
            ))}
          </ContentWrapper>
        </StyledWrapper>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default TeacherDetails;
