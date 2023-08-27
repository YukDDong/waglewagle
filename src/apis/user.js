import { client } from "./index";

// 로그인 시 post 요청
export const login = async (payload) => {
  const response = await client.post("/authenticate", payload);
  return response;
};

// 회원가입 시 post 요청
export const join = async (payload) => {
  const response = await client.post("/user/signup", payload);
  return response;
};

// TODO-GOGI : 테스트용으로 추후 삭제 예정
export const jwtTest = async () => {
  const response = await client.get("/api/v1/test");
  return response;
};
