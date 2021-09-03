import React, { useState } from "react";
import "./styles.css";
import { ListeyeEkle, ListeyiTemizle } from "./actions/";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // const [liste, setListe] = useState(INITIAL_STATE);

  const toDoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(ListeyeEkle(text));
            setText("");
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {toDoState.liste.map((item) => (
          <div
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
            onClick={() => dispatch({ type: "ISARETLE", payload: item.id })}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button className="temizle" onClick={() => dispatch(ListeyiTemizle())}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};

export default App;
