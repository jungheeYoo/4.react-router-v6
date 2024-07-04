// function Home() {
//   return <h1>Home</h1>;
// }
// export default Home;

////////////////////////////////////////////////
// 4-3
// // errorElement
// // 우리의 컴포넌트에 에러가 발생해서 충돌하거나
// // 컴포넌트의 위치를 찾지 못할 때 쓰는 것
// // 일부러 컴포넌트가 충돌하도록 만듦
// // 에러 : users는 비어있는 array인데 첫 번째 아이템 불러와서 name에 접근
// function Home() {
//   // const users: any = [];
//   // return <h1>{users[0].name}Home</h1>;
//   return <h1>Home</h1>;
// }
// export default Home;

////////////////////////////////////////////////
// 4-5
// useParams

import { Link } from 'react-router-dom';
import { users } from '../db';

// ul 을 render 하고 db에서 users를 가져올것임
// map으로 각각의 user에 대해서 li 아이템을 생성해달라고 함
// 이제 이 유저에 대한 정보를 더 보게 하기 위해서 Link를 만듦
// 여기엔 어떤 강의 코스로 이동할 지, 어떤 페이지로 이동할 지 그런 것들을 적으면 됨
// 실제로 URL의 dynamic parameter로 유저를 보낼 수 있다
function Home() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;

////////////////////////////////////////////////
// // 4-8
// // Extras
// // useSearchParams

// import { Link, useSearchParams } from 'react-router-dom';
// import { users } from '../db';

// function Home() {
//   const [readSearchParms, setSearchParams] = useSearchParams();
//   // console.log(readSearchParms.get('geo'));
//   setTimeout(() => {
//     setSearchParams({
//       day: 'today',
//       tomorrow: '123',
//     });
//   }, 3000);
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Home;
