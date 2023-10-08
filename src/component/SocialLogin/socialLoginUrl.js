const KAKAO_REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
const KAKAO_CLIENT_ID = `${process.env.REACT_APP_KAKAO_LOGIN_API_KEY}`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CALLBACK_URL = `${process.env.REACT_APP_NAVER_CALLBACK_URL}`;
const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENTID}`;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=1234`;
