import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Main from "./pages/Main/Main";
import MakeHopae from "./pages/MakeHopae/MakeHopae";
import KakaoLogin from "./pages/KakaoLogin/KakaoLogin";
import Sample from "./pages/Sample/Sample";
import FindPwd from "./pages/FindPwd/FindPwd";
import MakeGiwaHouse from "./pages/MakeGiwaHouse/MakeGiwaHouse";
import StorageGiwa from "./pages/StorageGiwa/StorageGiwa";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import Setting from "./pages/Setting/Setting";
import MyPage from "./pages/MyPage/MyPage";
import ChangePwd from "./pages/ChangePwd/ChangePwd";
import ConfirmPwd from "./pages/ChangePwd/ConfirmPwd";
import Error from "./pages/Error/Error";

const routes = [
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/main/:url",
    element: <Main />,
  },
  {
    path: "/makeHopae",
    element: <MakeHopae />,
  },
  {
    path: "/makeGiwaHouse",
    element: <MakeGiwaHouse />,
  },
  {
    path: "/kakao_login",
    element: <KakaoLogin />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/findPwd",
    element: <FindPwd />,
  },
  {
    /* 마이페이지 - 보관함 */
    path: "/storageGiwa",
    element: <StorageGiwa />,
  },
  {
    /* 회원탈퇴 */
    path: "/withdrawal",
    element: <Withdrawal />,
  },
  {
    /* 마이페이지 */
    path: "/myPage",
    element: <MyPage />,
  },
  {
    /* 마이페이지 - 설정 */
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/changePwd",
    element: <ChangePwd />,
  },
  {
    path: "/confirmPwd",
    element: <ConfirmPwd />,
  },
  /* 404 에러 */
  {
    path: "/error",
    element: <Error />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
