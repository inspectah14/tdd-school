import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Login from "../../Components/Login/Login";
import AuthContext from "../../store/auth-context";
import Form from "../../Components/Form/Form";
import Modal from "../../Components/UI/Modal";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`;

const AddTeachers = () => {
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
        <Modal title="Please login below to add new teacher">
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

export default AddTeachers;
