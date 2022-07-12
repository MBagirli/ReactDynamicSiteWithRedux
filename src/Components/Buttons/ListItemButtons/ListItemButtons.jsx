import listitembuttons from "./ListItemButtons.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../ReduxToolKit/store";

const ListItemButtons = (props) => {
  let dispatch = useDispatch();

  let ClickHandler = () => {
    dispatch(
      CartActions.AddToCart({
        name: props.obj.name,
        price: props.obj.price,
        quantity: props.obj.value,
      })
    );
  };
  return (
    <button onClick={ClickHandler} className={listitembuttons.container}>
      <p className={listitembuttons.container__p}>+Add</p>
    </button>
  );
};

export default ListItemButtons;
