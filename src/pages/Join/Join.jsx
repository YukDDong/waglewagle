import { useCallback, useState } from "react";
import LoginForm from "../../component/LoginForm/LoginForm";
import NavBar from "../../component/NavBar/NavBar";

export default function Join() {
  const [{ nickName, userId, password, checkPassword }, setJoinInfo] = useState(
    {
      nickName: "",
      userId: "",
      password: "",
      checkPassword: "",
    }
  );
  const joinUserInfo = useCallback(
    (nickName, userId, password, checkPassword) => {
      setJoinInfo({
        nickName,
        userId,
        password,
        checkPassword,
      });
    },
    []
  );

  const onSubmit = useCallback(() => {
    console.log(nickName, userId, password, checkPassword);
  });

  return (
    <>
      <NavBar />
      <LoginForm joinUserInfo={joinUserInfo} onSubmit={onSubmit} />
    </>
  );
}
