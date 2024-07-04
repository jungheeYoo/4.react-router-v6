// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import About from './screens/About';
// import Home from './screens/Home';

// // 4-1
// // BrowserRouter
// // 초기 셋팅

// // Header를 BrowserRouter안에 넣을 것임
// // 왜내면 Header는 Link를 사용하고 있기 때문에
// // Link를 사용하려면 Link를 Router 안에 넣어야 해
// // Router 밖에서는 Link를 render 할 수 없음

// // routes 생성
// // Home과 About 페이지를 render 하려고 함
// // Router안에서 Routes를 적어주면 됨
// // Routes는 react-router-dom에서 옴
// // Routes안에서는 Route를 쓸 것임
// // Route는 React 컴포넌트이고 paht를 가짐
// // Home, About element를 render 한다
// function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;

////////////////////////////////////////////////
// // 4-2
// // createBrowserRouter 함수

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';
// import NotFound from './screens/NotFound';
// import ErrorComponent from './components/ErrorComponent';

// // 브라우저를 JSX 컴포넌트를 사용하지 않고 좀 더 선언적으로 바꿔줌
// // Router 역시 Header를 더 이상 render 하지 않으니까 없앰
// // 그리고 전체 컴포넌트도 없애줌
// // 그리고 const Router 생성
// // createBrowserRouter라는 함수를 import
// // 이건 react-router-dom 에서 옴. react-router-dom 입력
// // 이렇게함으로써 Router 를 array 형식으로 표현할 수 있게 해줌. JavaScript Object로부터
// // 첫 번재 route 는 Home 페이지가 아님
// // 대신 전체 route들의 컨테이너와 같은 것이 될 것임
// // 그래서 App.tsx를 Root.tsx로 바꿈

// // 만약 유저가 path: '/', 이 URL로 이동한다면
// // 또는 만약 location이 그 URL과 일치한다면 element Root 를 render 할 것임

// // Home, About 화면 render 하려면 path: '/',를 부모로 생각해야함
// // 즉, Home이나 About은 '자식'으로 생각하면 된다
// // '/'는 URL 그 자체, '/about' 은 일종의 '/' 의 자식인것이다
// // 그래서 about을 '/' 경로의 children 안에 넣은 이유이다
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ]);

// export default router;

// // Root의 자식을 render 하길 원한다면?
// // Root 안으로 가서 Oulet이라는 컴포넌트 적어준다
// // 이렇게 하면 만약 /about 페이지로 가면
// // react router가 이 Root를 보고 Root를 render하고
// // 네가 /about으로 가려고 하는 상황이기 때문에
// // react router는 Oulet이라는을 About으로 대체하려고 한다

// // /about으로 가고자 하면, path: '/', 이 URL로 매치가 되고
// // 그러면 react router는 Root를 Render 하게 됨
// // 그런데 Root한테 자식이 있기 때문에
// // 우리는 Oulet이라는 컴포넌트를 사용했다
// // react router는 이 Oulet 컴포넌트를 통해서 URL을 보게 되는데
// // 예를 들면, /about이라면 Root를 render하고 About도 render하게 됨
// // 여기서 뭘하냐면, Oulet을 네가 render 하고자 하는 route로 바꿔서 render 한 것
// // 그것이 자식 route이다

////////////////////////////////////////////////
// // 4-3
// // errorElement
// // 우리의 컴포넌트에 에러가 발생해서 충돌하거나
// // 컴포넌트의 위치를 찾지 못할 때 쓰는 것
// // 에러 컴포넌트를 쓰는 이유는 다른 컴포넌트들을 또 다른 컴포넌트에서
// // 발생하는 문제로부터 보호해주기 때문

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';
// import NotFound from './screens/NotFound';
// import ErrorComponent from './components/ErrorComponent';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//         errorElement: <ErrorComponent />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//     errorElement: <NotFound />,
//   },
// ]);

// export default router;

// // ErrorElement가 없다면 Home elelment가 충돌했을 때
// // Unhandled Thrown Error! 화면에 나오면서 앱이 죽어버림
// // Home이든 About이든 볼 수 없음

////////////////////////////////////////////////
// // 4-5
// // useParams

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';
// import NotFound from './screens/NotFound';
// import ErrorComponent from './components/ErrorComponent';
// import User from './screens/users/User';

// // react-router한테 이 URL이 dynamic parameter를 가질 수 있다는 것을 알려줌
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//         errorElement: <ErrorComponent />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       /*
//         // 우리의 경우 유저들이 /users로 갈 수 없다
//         // /users/2 같은 곳만 갈 수 있다
//         // 여기서는 만약에 유저가 /users만 있는 경로로 간다면
//         // Not Found를 보여주고 싶음

//       */
//       {
//         path: 'users/:userId',
//         element: <User />,
//       },
//       /* {
//         // 만약에 유저가 /users로 가서 뭔가를 볼 수 있다면
//         // 이런식으로 해야 함
//         // 왜냐하면 여기서 너는 element 하나를 render 할 수 있다
//         // 그래서 유저가 /users 이쪽에 오면 뭔가 보여주고 싶다면
//         // 이 방법으로 해야함
//         // 그러면 /users에서 element를 redner 할 수 있다
//         // 그리고 /users/:userId도 render 할 수 있다
//         path: 'users',
//         element
//         children: [
//           {
//             path: ':userId',
//             element: <User />,
//           },
//         ],
//       }, */
//     ],
//     errorElement: <NotFound />,
//   },
// ]);

// export default router;

////////////////////////////////////////////////
// 4-6
// Outlet

import { createBrowserRouter } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

// path: 'followers', 여기 있다는 것은 User 자식 안에 있다는 것이고
// User를 render하면서 followers도 User 화면 안의 Outlet에 넣을 것임
// 이렇게 하면 라우터가 두 개가 필요 없고 그냥 자식을 정의하면 됨
// 그리고 Outlet을 render하면 됨
// 그리고 위치도 컨드롤 할 수 있다
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

////////////////////////////////////////////////
// 4-7
// useOuletContext
// Followers 화면에 데이터를 넘기고 싶다
// 만약 이 User 화면ㄴ에서 Followers 화면과 공유하고 싶은 중요한 데이터가 있다면?
// 첫 번째 방법은
// useParams 쓰는 방법
