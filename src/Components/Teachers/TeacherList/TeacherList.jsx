import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AuthContext);

  const { data, error } = useFetchLists("http://localhost:3010/teachers");

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <StyledWrapper>
      <H2>Teachers</H2>
      {teachers.map((teacher) => (
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
    </StyledWrapper>
  );
};

export default TeacherList;
