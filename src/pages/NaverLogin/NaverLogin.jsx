import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setItem } from "../../utils/storage";
import { login } from "../../redux/actions/userActions";
import { loginNaverApi } from "../../apis/user";

const NaverLogin = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  useEffect(() => {
    // if (!code) {
    //   navigate("/login");
    //   return;
    // }
    // loginNaverApi({
    //   code: code,
    //   state: state,
    //   memberType: "NAVER",
    // }).then((result) => {
    //   if (result.data.status === "SUCCESS") {
    //     setItem("USERINFO", {
    //       email: "",
    //       userId: result.data.data.userId,
    //       username: result.data.data.userName,
    //       boardId: result.data.data.boardId,
    //       memberType: "NAVER",
    //       autoLogin: true,
    //     });
    //     setItem("AUTH", result.data.data.accessToken);
    //     setItem("autoLogin", true);
    //     dispatch(
    //       login({
    //         email: "",
    //         userId: result.data.data.userId,
    //         username: result.data.data.userName,
    //         boardId: result.data.data.boardId,
    //         memberType: "NAVER",
    //         autoLogin: true,
    //       })
    //     );
    //   }
    // });
  }, []);
  return <div></div>;
};

export default NaverLogin;
