import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import fetchPost from "../../hooks/fetchPost";

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Course Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="length">Course length in number of weeks</label>
            <input
              type="text"
              id="length"
              placeholder="Length"
              ref={lengthInputRef}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              placeholder="Start"
              ref={startDateInputRef}
            />
          </div>
          <div>
            <label htmlFor="descr">Course Description</label>
            <input
              type="text"
              id="descr"
              placeholder="Description"
              ref={descrInputRef}
            />
          </div>
          <div>
            <button type="submit">Submit Course</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              ref={firstNameInputRef}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              ref={lastNameInputRef}
            />
          </div>
          <div>
            <label htmlFor="socialNumber">Social Security Number</label>
            <input
              type="text"
              id="socialNumber"
              placeholder="Social Security Number"
              ref={socialNumberInputRef}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              ref={phoneInputRef}
            />
          </div>
          <div>
            <label htmlFor="competencies">Competence Areas</label>
            <select
              multiple={true}
              value={competencies}
              onChange={onSelectChange}
            >
              <option value="Economics">Economics</option>
              <option value="History">History</option>
              <option value="Languages">Languages</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit Course</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Form;
