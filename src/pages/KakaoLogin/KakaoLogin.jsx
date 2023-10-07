import React, { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  KAKAO_CLIENT_ID,
  KAKAO_REDIRECT_URI,
} from "../../component/SocialLogin/socialLoginUrl";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginSocialApi } from "../../apis/user";

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
      console.log(result);
    });

    // const GRANT_TYPE = "authorization_code";

    // const response = await fetch(
    //   `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
    // https://kauth.kakao.com/oauth/token?code=pCGvVvqQ23eXrt8P4qeiRWshB0uJpmrvwuuW6DkS7MLCkzEYaFkHBVyjuAv0icengg5qnQo9dJgAAAGLCwix7g&grant_type=authorization_code&client_secret=yJIGsT5q8680LdwtBA9vPATmEVgx71Ip&redirect_uri=https%3A%2F%2Fvw7rjas2pe.ap-northeast-1.awsapprunner.com%2Foauth%2Fkakao%2Fcallback&client_id=4aa8377c7918ab202874d5727e46c43c
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //     },
    //   }
    // );

    // const data = await response.json();
    // const { access_token } = data;
    // if (access_token) {
    //   const userResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${access_token}`,
    //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //     },
    //   });
    //   const userData = await userResponse.json();
    //   const userDetail = userData.kakao_account;
    //   dispatch(
    //     login({
    //       id: userDetail.email,
    //       name: userDetail.profile.nickname,
    //       loggedIn: true,
    //       data: userDetail,
    //     })
    //   );
    //   navigate("/main");
    // }
  }, []);
  return <div></div>;
};

export default KakaoLogin;
