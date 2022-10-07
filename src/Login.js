import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const clickLoginBtn = () => {
    navigate("/main");
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
            />
          </div>
          <div className="pwContainer">
            <span className="itemName">Password</span>
            <input
              className="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요."
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
