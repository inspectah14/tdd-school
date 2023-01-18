import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 600px;
  width: 400px;
  background: whitesmoke;
  border: 2px solid black;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};
  align-items: center;
  height: ${(props) => (props.height ? "150px" : "60px")};
`;

const StyledInputs = styled.input`
  width: 180px;
  border-radius: 5px;
  padding: 4px 5px;
`;

const StyledTextArea = styled.textarea`
  width: 180px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px 5px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom ? "10px" : "")};
`;

const StyledButton = styled.button`
  width: 130px;
  padding: 10px 5px;
  border: 1px solid black;
  border-radius: 5px;
  background: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const AddCourseForm = ({
  handleSubmit,
  titleInputRef,
  lengthInputRef,
  startDateInputRef,
  descrInputRef,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Add new course</h3>
      <InputWrapper>
        <StyledLabel htmlFor="title">Course Title</StyledLabel>
        <StyledInputs
          type="text"
          id="title"
          placeholder="Title"
          ref={titleInputRef}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="length">
          Course length in number of weeks
        </StyledLabel>
        <StyledInputs
          type="number"
          id="length"
          placeholder="Length"
          ref={lengthInputRef}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
        <StyledInputs
          type="date"
          id="startDate"
          placeholder="Start"
          ref={startDateInputRef}
          required
        />
      </InputWrapper>
      <InputWrapper height="true">
        <StyledLabel htmlFor="descr" marginBottom>
          Course Description
        </StyledLabel>
        <StyledTextArea
          id="descr"
          placeholder="Description"
          ref={descrInputRef}
          rows="10"
          required
        />
      </InputWrapper>
      <InputWrapper justify>
        <StyledButton type="submit">Submit Course</StyledButton>
      </InputWrapper>
    </StyledForm>
  );
};

export default AddCourseForm;
