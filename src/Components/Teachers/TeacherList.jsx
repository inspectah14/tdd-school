import { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import useFetch from "../../hooks/useFetch";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const context = useContext(AuthContext);

  const { data, error } = useFetch("http://localhost:3010/teachers");

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
    <section>
      <h2>List of Teachers</h2>
      {teachers.map((teacher) => (
        <div key={teacher.socialNumber}>
          <h3>
            {teacher.firstName} {teacher.lastName}
          </h3>
          <p>Social Security Number: {teacher.socialNumber} </p>
          <p>Email: {teacher.email} </p>
          <p>Phone: {teacher.phone} </p>
        </div>
      ))}
    </section>
  );
};

export default TeacherList;
