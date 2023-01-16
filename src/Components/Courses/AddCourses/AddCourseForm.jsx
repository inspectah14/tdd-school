import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetchLists from "../../../hooks/useFetchLists";

const AddCourseForm = () => {
  const [latestId, setLatestId] = useState(0);
  const titleInputRef = useRef();
  const lengthInputRef = useRef();
  const startDateInputRef = useRef();
  const descrInputRef = useRef();

  const navigate = useNavigate();

  const { data, error } = useFetchLists("http://localhost:3010/courses");

  useEffect(() => {
    if (data) {
      const currentLatestId = data.reduce((prev, current) => {
        return prev.id > current.id ? prev : current;
      });

      setLatestId(currentLatestId.id + 1);
    }
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      id: latestId,
      title: titleInputRef.current.value,
      length: lengthInputRef.current.value,
      startDate: startDateInputRef.current.value,
      descr: descrInputRef.current.value,
    };

    const newCourse = fetch("http://localhost:3010/courses", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response;
      })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));

    navigate("/");
  };

  return (
    <section>
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
    </section>
  );
};

export default AddCourseForm;
