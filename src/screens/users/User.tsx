// 4-5
// useParams

// import { useParams } from 'react-router-dom';
// import { users } from '../../db';

// // 유저의 자세한 정보가 나올 새로운 스크린 만들기
// // 이 화면을 우리의 Router에 추가
// function User() {
//   const params = useParams();
//   console.log(params);
//   /*
//   Object
//     userId: "1"
//   [[Prototype]]: Object
//   */
//   // 파라미터에서 id 꺼내기
//   const { userId } = useParams();
//   return (
//     <h1>
//       User with id {userId} is named: {users[Number(userId) - 1].name}
//     </h1>
//   );
// }
// export default User;

////////////////////////////////////////////////
// // 4-6
// // Outlet
// // 또 다른 Outlet을 render
// // 규칙은?
// // 이 Route, 즉, 이 스크린린에 자식이 있다면
// // 그 경우가 바로 Outlet이 사용되는 경우이다
// // Outlet이 이 스크린의 자식을 render하게 되는 것

// import { Link, Outlet, useParams } from 'react-router-dom';
// import { users } from '../../db';

// function User() {
//   const { userId } = useParams();
//   return (
//     <div>
//       {/* 위치 컨트롤 가능 */}
//       {/* <Outlet /> */}
//       <h1>
//         User with id {userId} is named: {users[Number(userId) - 1].name}
//       </h1>
//       <hr />
//       {/*
//       // '/'를 쓰면 절대 경로 : root 다음 바로부터 시작하는 경로를 말함
//       // http://localhost:3000/Followers 로 데려감
//       // 그래서 여기서는 안씀. 상대 경로 URL로 씀
//       // 이러면 지금 네가 현재 있는 그 경로 다음에 경로가 추가 됨
//       // http://localhost:3000/users/2/followers
//       */}
//       <Link to="followers">See followers</Link>
//       <Outlet />
//     </div>
//   );
// }
// export default User;

////////////////////////////////////////////////
// 4-7
// useOuletContext

// 2. 두 번째 방법은
// URL을 참조하는 대신
// 다식 route들과 소통해 보는 방법도 있다
// Outlet을 render 할 거고 context라는 것도 send 할거야
// context={} 안에는 원하는 것 무엇이든지 보낼 수 있다
// array가 될 수도, text, true, false, number, object...
// ✨ 중요!! Followers는 여기서 render 되는 것이다
// react router가 너의 route 설정을 읽고서
// Outlet을 네 URL과 매치되는 자식으로 대체시킬 것이다
// 그럼 Followers 쪽에서는 context를 어떻게 받지?

import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  console.log(useOutletContext()); // {darkMode: true}
  // 다크모드인지 아닌지를 알게 된다
  // Root로부터 메시지를 받는다
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
export default User;

////////////////////////////////////////////////
// 4-8
// Extras
// useSearchParams
