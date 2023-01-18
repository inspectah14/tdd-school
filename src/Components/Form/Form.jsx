import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import fetchPost from "../../hooks/fetchPost";
import AddCourseForm from "./AddCourseForm";
import AddTeacherForm from "./AddTeacherForm";

const Form = () => {
  const titleInputRef = useRef();
  const lengthInputRef = useRef();
  const startDateInputRef = useRef();
  const descrInputRef = useRef();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const socialNumberInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const [competencies, setCompetencies] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const onSelectChange = (e) => {
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
    setCompetencies(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pathName === "/addcourses") {
      const body = {
        title: titleInputRef.current.value,
        length: lengthInputRef.current.value,
        startDate: startDateInputRef.current.value,
        descr: descrInputRef.current.value,
      };
      fetchPost("http://localhost:3010/courses", body);
    } else {
      const body = {
        firstName: firstNameInputRef.current.value,
        lastName: lastNameInputRef.current.value,
        socialNumber: socialNumberInputRef.current.value,
        email: emailInputRef.current.value,
        phone: phoneInputRef.current.value,
        competencies,
      };
      fetchPost("http://localhost:3010/teachers", body);
    }

    navigate("/");
  };

  return (
    <section>
      {pathName === "/addcourses" ? (
        <AddCourseForm
          handleSubmit={handleSubmit}
          titleInputRef={titleInputRef}
          lengthInputRef={lengthInputRef}
          startDateInputRef={startDateInputRef}
          descrInputRef={descrInputRef}
        />
      ) : (
        <AddTeacherForm
          handleSubmit={handleSubmit}
          firstNameInputRef={firstNameInputRef}
          lastNameInputRef={lastNameInputRef}
          socialNumberInputRef={socialNumberInputRef}
          emailInputRef={emailInputRef}
          phoneInputRef={phoneInputRef}
          competencies={competencies}
          onSelectChange={onSelectChange}
        />
      )}
    </section>
  );
};

export default Form;
