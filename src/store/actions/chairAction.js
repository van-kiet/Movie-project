import { BOOK_CHAIR, UPDATE_CHAIR } from "../types/chairType";

export const bookChairAction = () => {
  return { type: BOOK_CHAIR };
};
export const updateChairAction = (payload) => {
  return { type: UPDATE_CHAIR, payload };
};
