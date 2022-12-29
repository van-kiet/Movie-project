import data from "../../data/danhSachGhe.json";
import { BOOK_CHAIR, UPDATE_CHAIR } from "../types/chairType";
const DEFAULT_STATE = {
  ChairData: data,
  SelectedChair: [],
};
export const movieReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CHAIR:
      const { index, idx } = payload;
      const data = [...state.ChairData];
      const idxdata = JSON.parse(JSON.stringify(state.SelectedChair));

      if (idxdata.length < 1 && data[index].danhSachGhe[idx].daDat === false) {
        idxdata.push(payload);
      } else if (!data[index].danhSachGhe[idx].daDat) {
        let isChecked = false;

        for (let i in idxdata) {
          if (
            idxdata[i].index === payload.index &&
            idxdata[i].idx === payload.idx
          ) {
            idxdata.splice(i, 1);
            isChecked = true;
            break;
          }
        }
        if (!isChecked) {
          idxdata.push(payload);
        }
      }

      if (data[index].danhSachGhe[idx].daDat) {
      } else {
        data[index].danhSachGhe[idx].dangChon =
          !data[index].danhSachGhe[idx].dangChon;
      }

      state.SelectedChair = idxdata;
      state.ChairData = data;
      break;
    case BOOK_CHAIR: {
      const data = [...state.ChairData];
      const idxdata = [...state.SelectedChair];
      for (let i in idxdata) {
        const { index, idx } = idxdata[i];
        data[index].danhSachGhe[idx].daDat = true;
        data[index].danhSachGhe[idx].dangChon = false;
      }

      state.ChairData = data;
      break;
    }
    default:
      break;
  }
  return { ...state };
};
