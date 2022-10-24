import Item from './Item/Item';
import './Main.scss';

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
        <div className="menuContainer">
          <span className="menu">투데이</span>
          <span className="menu">베스트</span>
          <span className="menu">브랜드</span>
          <span className="menu">쇼핑몰</span>
          <span className="menu">뷰티</span>
          <span className="menu">라이프</span>
          <span className="menu">세일</span>
        </div>
        <div className="itemsContainer">
          {ITEMS.map(item => {
            return <Item item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;

const ITEMS = [
  {
    img: './img/item_1.png',
    company: '유앤엘씨',
    title: '[쿠폰가 29,680원][1+1] CREW NECK LOOSE FIT SWEATER [10COLOR]',
    sale: '47%',
    price: '37,100',
  },
  {
    img: './img/item_2.png',
    company: '피아네르',
    title: '[1+1](하이버 단독구성)1989스탠다드 기모 후드 4종',
    sale: '55%',
    price: '62,800',
  },
  {
    img: './img/item_3.png',
    company: '1989 스탠다드',
    title: '[2장 세트] 에센셜 조거 스웨트팬츠 (3color)',
    sale: '70%',
    price: '39,800',
  },
  {
    img: './img/item_4.png',
    company: '피아네르',
    title: '[1+1] 메버릭 오버핏맨투맨 4종 택2 패키지A',
    sale: '72%',
    price: '39,100',
  },
  {
    img: './img/item_5.png',
    company: '엑스컨테이너',
    title:
      '[쿠폰가67,320원][컬러추가]앨빈클로 MA-1 후드 항공 점퍼 AZH898 ( 3 Color)',
    sale: '39%',
    price: '79,200',
  },
  {
    img: './img/item_6.png',
    company: '엑스컨테이너',
    title: '[2장 세트] 클래식 와이드 조거 스웨트팬츠 (2color)',
    sale: '71%',
    price: '41,700',
  },
  {
    img: './img/item_7.png',
    company: '어웨이크',
    title: 'EXC 와이드데님팬츠 (6컬러)',
    sale: '',
    price: '29,000',
  },
  {
    img: './img/item_8.png',
    company: '제멋',
    title: 'EXC 2WAY 후드 집업 (멜란지그레이)',
    sale: '5%',
    price: '37,100',
  },
];
