import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ loginOption, component }) => {
  const { loggedIn, username, boardId } = useSelector(
    (state) => state.userReducer
  );

  if (loggedIn && loginOption) return component;

  if (loggedIn && !username) return <Navigate to={"/makeHopae"} />;

  if (loggedIn && !boardId) return <Navigate to={"/makeGiwaHouse"} />;

  if (loggedIn && !loginOption) return <Navigate to={"/main"} />;

  if (!loggedIn && loginOption) return <Navigate to={"/login"} />;

  if (!loggedIn && !loginOption) return component;
};

export default AuthRoute;
