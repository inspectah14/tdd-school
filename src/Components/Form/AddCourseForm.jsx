import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};
  align-items: center;
  height: ${(props) => (props.height ? "100px" : "60px")};
`;

const StyledInputs = styled.input`
  width: 180px;
  border-radius: 5px;
  padding: 2px 5px;
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
      <InputWrapper>
        <StyledLabel htmlFor="title">Course Title</StyledLabel>
        <StyledInputs
          type="text"
          id="title"
          placeholder="Title"
          ref={titleInputRef}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="length">
          Course length in number of weeks
        </StyledLabel>
        <StyledInputs
          type="text"
          id="length"
          placeholder="Length"
          ref={lengthInputRef}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
        <StyledInputs
          type="text"
          id="startDate"
          placeholder="Start"
          ref={startDateInputRef}
        />
      </InputWrapper>
      <InputWrapper height>
        <StyledLabel htmlFor="descr" marginBottom>
          Course Description
        </StyledLabel>
        <StyledTextArea
          id="descr"
          placeholder="Description"
          ref={descrInputRef}
          rows="5"
        />
      </InputWrapper>
      <InputWrapper justify>
        <StyledButton type="submit">Submit Course</StyledButton>
      </InputWrapper>
    </StyledForm>
  );
};

export default AddCourseForm;
