import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

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
    <section>
      <form onSubmit={onLoginHandler}>
        <div>
          <label htmlFor="userName">Username/Email</label>
          <input
            id="userName"
            placeholder="username"
            value={userName}
            onChange={onChangeUsernameHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div>
          <button type="submit" disabled={buttonDisabled}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
