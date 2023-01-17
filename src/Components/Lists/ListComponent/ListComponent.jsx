import { Link } from "react-router-dom";
import styled from "styled-components";

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
            <div>
              <h3>
                {course.title} - ID: {course.id}
              </h3>
              <p>Course length: {course.length} </p>
              <p>Course start date: {course.startDate} </p>
            </div>
          </StyledLink>
        ))}
      </>
      <>
        {teachers?.map((teacher) => (
          <StyledLink to={`/teacher/${teacher.id}`} key={teacher.id}>
            <div>
              <h3>
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p>Social Security Number: {teacher.socialNumber} </p>
              <p>Email: {teacher.email} </p>
              <p>Phone: {teacher.phone} </p>
            </div>
          </StyledLink>
        ))}
      </>
    </>
  );
};

export default ListComponent;
