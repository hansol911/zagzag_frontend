import "./Main.css";

const Login = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="gnbContainer">
          <div className="logoContainer">
            <img className="logoImage" src="./img/logo.png" alt="logoImage" />
            <span className="logoName">ZAGZAG</span>
          </div>
          <div className="searchContainer"></div>
          <div className="cartContainer">
            <img className="cartImage" src="./img/cart.png" alt="cartImage" />
          </div>
          <div className="userContainer">
            <img className="userImage" src="./img/user.png" alt="userImage" />
          </div>
        </div>
        <hr></hr>
        <div className="menuContainer">
          <span className="menu">투데이</span>
          <span className="menu">베스트</span>
          <span className="menu">브랜드</span>
          <span className="menu">쇼핑몰</span>
          <span className="menu">뷰티</span>
          <span className="menu">라이프</span>
          <span className="menu">세일</span>
        </div>
        <div className="imageContainer">
          <img className="mainImage" src="./img/main_img.png" alt="mainImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
