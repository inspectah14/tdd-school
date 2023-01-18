import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Login from "../../Components/Login/Login";
import AuthContext from "../../store/auth-context";
import Form from "../../Components/Form/Form";
import Modal from "../../Components/UI/Modal";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 50px;
`;

const AddCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(AuthContext);

  useEffect(() => {
    if (!context.isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [context.isLoggedIn]);

  return (
    <StyledMain>
      {showModal ? (
        <Modal title="Please login below to add new course">
          <Login />
        </Modal>
      ) : (
        <>
          <Form />
        </>
      )}
    </StyledMain>
  );
};

export default AddCourses;
