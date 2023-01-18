import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 700px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: center;
  height: ${(props) => (props.height ? "150px" : "60px")};
`;

const StyledInputs = styled.input`
  width: 180px;
  border-radius: 5px;
  padding: 2px 5px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  margin-bottom: ${(props) => (props.marginBottom ? "10px" : "")};
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 100px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 2px 5px;
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

const AddTeacherForm = ({
  handleSubmit,
  firstNameInputRef,
  lastNameInputRef,
  socialNumberInputRef,
  emailInputRef,
  phoneInputRef,
  competencies,
  onSelectChange,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper justify="space-evenly">
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <StyledInputs
          type="text"
          id="firstName"
          placeholder="First Name"
          ref={firstNameInputRef}
        />
      </InputWrapper>
      <InputWrapper justify="space-evenly">
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <StyledInputs
          type="text"
          id="lastName"
          placeholder="Last Name"
          ref={lastNameInputRef}
        />
      </InputWrapper>
      <InputWrapper justify="space-evenly">
        <StyledLabel htmlFor="socialNumber">Social Security Number</StyledLabel>
        <StyledInputs
          type="text"
          id="socialNumber"
          placeholder="Social Security Number"
          ref={socialNumberInputRef}
        />
      </InputWrapper>
      <InputWrapper justify="space-evenly">
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInputs
          type="text"
          id="email"
          placeholder="Email"
          ref={emailInputRef}
        />
      </InputWrapper>
      <InputWrapper justify="space-evenly">
        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <StyledInputs
          type="text"
          id="phone"
          placeholder="Phone"
          ref={phoneInputRef}
        />
      </InputWrapper>
      <InputWrapper height justify="flex-start">
        <StyledLabel htmlFor="competencies" marginBottom>
          Competence Areas
        </StyledLabel>
        <StyledSelect
          multiple={true}
          value={competencies}
          onChange={onSelectChange}
        >
          <option value="Economics">Economics</option>
          <option value="History">History</option>
          <option value="Languages">Languages</option>
          <option value="Programming">Programming</option>
          <option value="Physical Education">Physical Education</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Geography">Geography</option>
        </StyledSelect>
      </InputWrapper>
      <InputWrapper>
        <StyledButton type="submit">Submit Teacher</StyledButton>
      </InputWrapper>
    </StyledForm>
  );
};

export default AddTeacherForm;
