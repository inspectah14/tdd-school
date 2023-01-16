import React, { useContext } from "react";
import styled from "styled-components";
import Login from "../../Components/Login/Login";
import AuthContext from "../../store/auth-context";
import AddCourseForm from "../../Components/Courses/AddCourses/AddCourseForm";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddCourses = () => {
  const context = useContext(AuthContext);

  return (
    <StyledMain>
      {!context.isLoggedIn ? (
        <>
          <h3>Please login below to add new course</h3>
          <Login />
        </>
      ) : (
        <>
          <h3>Add new course</h3>
          <AddCourseForm />
        </>
      )}
    </StyledMain>
  );
};

export default AddCourses;
