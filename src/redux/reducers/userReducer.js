import {
  LOGIN_USER,
  LOGOUT_USER,
  MAKE_GIWA_HOUSE,
  MAKE_HOPAE,
} from "../actions/userActions";

const initialState = {
  email: "",
  userId: "",
  username: "",
  loggedIn: false,
  memberType: "",
  boardId: 0,
  autoLogin: false,
};

// user의 로그인 유지와 로그아웃을 위한 Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userId: action.payload.userId,
        username: action.payload.username,
        boardId: action.payload.boardId,
        email: action.payload.email,
        memberType: action.payload.memberType,
        loggedIn: true,
        autoLogin: action.payload.autoLogin,
      };
    case LOGOUT_USER:
      return initialState;
    case MAKE_HOPAE:
      return {
        ...state,
        ...action.payload,
      };
    case MAKE_GIWA_HOUSE:
      return {
        ...state,
        boardId: action.payload.broadId,
      };
    default:
      return state;
  }
};
