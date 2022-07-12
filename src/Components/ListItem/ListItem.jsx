import listitem from "./ListItem.module.css";
import ListItemButtons from "../Buttons/ListItemButtons/ListItemButtons";
import { useState } from "react";

const ListItem = (props) => {
  let [input, setInput] = useState("");

  const ChangeInputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <li className={listitem.container}>
      <div className={listitem.container__firstContainer}>
        <h3>{props.obj.name}</h3>
        <em>{props.obj.description}</em>
        <p className={listitem.container__firstContainer__price}>
          ${props.obj.price}
        </p>
      </div>
      <div className={listitem.container__secondCotainer}>
        <div className={listitem.container__secondCotainer__container}>
          <p>Amount</p>
          <input
            onChange={ChangeInputHandler}
            className={listitem.container__secondCotainer__container__input}
            type="number"
            min="0"
            value={input}
          />
        </div>
        <ListItemButtons
          obj={{
            name: props.obj.name,
            price: props.obj.price,
            value: input,
          }}
        />
      </div>
    </li>
  );
};

export default ListItem;
