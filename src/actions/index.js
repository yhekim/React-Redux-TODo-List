import { EKLE, ISARETLE, TEMIZLE } from "./actionTypes";

export const ListeyeEkle = (text) => {
  return {
    type: EKLE,
    payload: text
  };
};
export const ismiIsaretle = (id) => {
  return {
    type: ISARETLE,
    payload: id
  };
};
export const ListeyiTemizle = () => {
  return {
    type: TEMIZLE
  };
};
