import popuplist from "./PopupList.module.css";
import PopupListItem from "../PopupListItem/PopupListItem";
import PopupListDefault from "../PopupListDefault/PopupListDefault";
import { useSelector } from "react-redux";

const PopupList = () => {
  let array = useSelector((state) => state.Cart.Products);

  let content;

  if (array.length === 0) {
    content = "";
  } else {
    content = array.map((item, index) => {
      return (
        <PopupListItem
          key={index}
          obj={{ name: item.name, quantity: item.quantity, price: item.price }}
        />
      );
    });
  }
  return (
    <ul className={popuplist.container}>
      {content}
      <PopupListDefault />
    </ul>
  );
};

export default PopupList;
