import React, { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI,
} from "../../component/SocialLogin/socialLoginUrl";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginSocialApi } from "../../apis/user";
import { setItem } from "../../utils/storage";

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      navigate("/login");
      return;
    }
    loginSocialApi({
      code: code,
      memberType: "KAKAO",
    }).then((result) => {
      if (result.data.status === "SUCCESS") {
        setItem("USERINFO", {
          email: "",
          userId: result.data.data.userId,
          username: result.data.data.userName,
          boardId: result.data.data.boardId,
          memberType: "KAKAO",
          autoLogin: true,
        });
        setItem("AUTH", result.data.data.accessToken);
        setItem("autoLogin", true);
        dispatch(
          login({
            email: "",
            userId: result.data.data.userId,
            username: result.data.data.userName,
            boardId: result.data.data.boardId,
            memberType: "KAKAO",
            autoLogin: true,
          })
        );
      }
    });
  }, []);
  return <div></div>;
};

export default KakaoLogin;
