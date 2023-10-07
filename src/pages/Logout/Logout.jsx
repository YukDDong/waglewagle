import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/storage";
import { logout } from "../../redux/actions/userActions";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    alert("접근 거부 되었습니다.");
    dispatch(logout());
    removeItem("AUTH");
    removeItem("USERINFO");
    removeItem("autoLogin");
    navigate("/login");
  }, []);
  return <></>;
};

export default Logout;
