import React, { useContext } from "react";
import styled from "styled-components";
import Login from "../../Components/Login/Login";
import AuthContext from "../../store/auth-context";
// import AddCourseForm from "../../Components/Courses/AddCourses/AddCourseForm";
import Form from "../../Components/Form/Form";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddTeachers = () => {
  const context = useContext(AuthContext);

  return (
    <StyledMain>
      {!context.isLoggedIn ? (
        <>
          <h3>Please login below to add a new teacher</h3>
          <Login />
        </>
      ) : (
        <>
          <h3>Add new teacher</h3>
          <Form />
        </>
      )}
    </StyledMain>
  );
};

export default AddTeachers;
