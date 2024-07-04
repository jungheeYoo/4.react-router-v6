// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';

// // 4-2
// // createBrowserRouter 함수
// // App.tsx는 더 이상 Router를 render 해주지 않음
// // Root를 render 하고 있음
// function Root() {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }

// export default Root;

////////////////////////////////////////////////
// 4-7
// useOuletContext
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;
