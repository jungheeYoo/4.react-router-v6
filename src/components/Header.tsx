// import { Link } from 'react-router-dom';

// // 4-1
// // BrowserRouter
// // 초기 셋팅

// // 우리가 어떤 페이지로 가도 불러올 수 있게 될 것임
// // Home 페이지나 About 페이지나 Header가 페이지 맨 위에 있을 것임
// // Link 는 react-router-dom에서 옴
// function Header() {
//   return (
//     <header>
//       <ul>
//         <li>
//           <Link to={'/'}>Home</Link>
//         </li>
//         <li>
//           <Link to={'/about'}>About</Link>
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

// 4-4
// useNavigate
// 유저를 어딘가로 보내는 기능
// 유저를 이동시키고 위치를 바꿔줌

// 다른 페이지로 이동시키는 두 가지 방법이 있음
// 1. Link 사용
// Link는 유저가 클릭해야 함
// 2. useNavigate 사용
// 유저를 로그인 시키거나 홈페이지로 이동시키고 싶다면
// 네 코드를 사용해서 크릭을 기다리지 않고
// 프로그램적으로 유저를 페이지에서 없애버리고 싶다면

import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/about');
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
