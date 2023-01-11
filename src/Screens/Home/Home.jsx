import CourseList from "../../Components/Courses/CourseList/CourseList";
import TeacherList from "../../Components/Teachers/TeacherList/TeacherList";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <StyledMain>
      <CourseList />
      <TeacherList />
    </StyledMain>
  );
};

export default Home;
