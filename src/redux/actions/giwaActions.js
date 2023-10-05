// type 선언
export const SELECT_GIWA = "SELECT_GIWA";
export const WRITE_GUEST_TEXT = "WRITE_GUEST_TEXT";
export const WRITE_NICKNAME = "WRITE_NICKNAME";
export const SELECT_TEXT_OPTION = "SELECT_TEXT_OPTION";
export const INIT_GIWA = "INIT_GIWA";

// action
export const selectGiwa = (giwaNumber) => ({
  type: SELECT_GIWA,
  payload: giwaNumber,
});

export const writeGuestText = (text) => ({
  type: WRITE_GUEST_TEXT,
  payload: text,
});

export const writeNickName = (text) => ({
  type: WRITE_NICKNAME,
  payload: text,
});

export const selectTextOption = (payload) => ({
  type: SELECT_TEXT_OPTION,
  payload: payload,
});

export const initGiwa = () => ({
  type: INIT_GIWA,
});
