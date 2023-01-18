import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 235px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ListComponent = ({ courses, teachers }) => {
  return (
    <>
      <>
        {courses?.map((course) => (
          <StyledLink to={`/course/${course.id}`} key={course.id}>
            <StyledContainer>
              <h3>
                {course.title} - ID: {course.id}
              </h3>
              <p>Course length: {course.length} weeks </p>
              <p>Course start date: {course.startDate} </p>
            </StyledContainer>
          </StyledLink>
        ))}
      </>
      <>
        {teachers?.map((teacher) => (
          <StyledLink to={`/teacher/${teacher.id}`} key={teacher.id}>
            <StyledContainer>
              <h3>
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p>Social Security Number: {teacher.socialNumber} </p>
              <p>Email: {teacher.email} </p>
              <p>Phone: {teacher.phone} </p>
            </StyledContainer>
          </StyledLink>
        ))}
      </>
    </>
  );
};

export default ListComponent;
