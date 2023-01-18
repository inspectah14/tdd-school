import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 170px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};
  align-items: center;
  height: 50px;
`;

const StyledButton = styled.button`
  width: 130px;
  padding: 5px;
  border: 1px solid #0b1316;
  border-radius: 5px;
  background: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Login = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthContext);

  const onLoginHandler = (e) => {
    e.preventDefault();

    context.onLogin({
      userName,
      password,
    });
  };

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (password.length > 0 && value.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && userName.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={onLoginHandler}>
        <InputWrapper>
          <label htmlFor="userName">Username/Email</label>
          <input
            id="userName"
            placeholder="username"
            value={userName}
            onChange={onChangeUsernameHandler}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </InputWrapper>
        <InputWrapper justify>
          <StyledButton type="submit" disabled={buttonDisabled}>
            Login
          </StyledButton>
        </InputWrapper>
      </StyledForm>
    </StyledSection>
  );
};

export default Login;
