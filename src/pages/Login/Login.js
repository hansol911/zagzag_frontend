import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    id: "",
    pw: "",
  });

  const exactAuth = { id: "hansol", pw: "1234" };

  const changeAuth = (e) => {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  };

  const clickLoginBtn = () => {
    if (auth.id === exactAuth.id && auth.pw === exactAuth.pw) {
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
              name="id"
              onChange={changeAuth}
            />
          </div>
          <div className="pwContainer">
            <span className="itemName">Password</span>
            <input
              className="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              name="pw"
              onChange={changeAuth}
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
