import { EKLE } from "../actions/actionTypes";
import { ISARETLE } from "../actions/actionTypes";
import { TEMIZLE } from "../actions/actionTypes";

const INITIAL_STATE = {
  liste: [
    { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    { id: 2, baslik: "Fatura ode", tamamlandi: true },
    { id: 3, baslik: "Ekmek Al", tamamlandi: false }
  ]
};

export const toDoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EKLE:
      console.log(action);
      return {
        ...state,
        liste: [
          ...state.liste,
          {
            id: Date.now(),
            baslik: action.payload,
            tamamlandi: false
          }
        ]
      };
    case ISARETLE:
      return {
        ...state,
        liste: state.liste.map((item) => {
          if (item.id === action.payload) {
            const updated = { ...item, tamamlandi: !item.tamamlandi };
            return updated;
          } else return item;
        })
      };
    case TEMIZLE:
      return {
        ...state,
        liste: state.liste.filter((item) => item.tamamlandi === false)
      };

    default:
      return state;
  }
};
