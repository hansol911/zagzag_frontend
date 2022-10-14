import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const exactAuth = { id: "hansol", pw: "1234" };

  const changeId = (inputId) => {
    setId(inputId);
  };

  const changePw = (inputPw) => {
    setPw(inputPw);
  };

  const clickLoginBtn = () => {
    if (id === exactAuth.id && pw === exactAuth.pw) {
      alert("ok");
      navigate("/main");
    } else {
      alert("failed!!");
    }
  };

  return (
    <div className="login">
      <h1 className="title">ZAGZAG</h1>
      <div className="loginContainer">
        <div className="inputContainer">
          <div className="idContainer">
            <span className="itemName">Username</span>
            <input
              className="id"
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={(e) => changeId(e.target.value)}
            />
          </div>
          <div className="pwContainer">
            <span className="itemName">Password</span>
            <input
              className="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => changePw(e.target.value)}
            />
          </div>
          <div className="forgetContainer">
            <span className="itemName">Forget password?</span>
          </div>
        </div>
        <button className="loginBtn" onClick={clickLoginBtn}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
