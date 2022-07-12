import popuplistitem from "./PopupListItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../ReduxToolKit/store";

const PopupListItem = (props) => {
  let dispatch = useDispatch();

  let AddHandler = () => {
    console.log(props.obj.name, props.obj.price, props.obj.quantity);
    dispatch(
      CartActions.Add({
        name: props.obj.name,
        price: props.obj.price,
        quantity: props.obj.quantity,
      })
    );
  };
  let DeleteHandler = () => {
    dispatch(
      CartActions.Delete({
        name: props.obj.name,
        price: props.obj.price,
        quantity: props.obj.quantity,
      })
    );
  };
  return (
    <li className={popuplistitem.container}>
      <div className={popuplistitem.container__first}>
        <h3>{props.obj.name}</h3>
        <div className={popuplistitem.container__first__container}>
          <p className={popuplistitem.container__first__container__price}>
            ${props.obj.price}
          </p>
          <p>x{props.obj.quantity}</p>
        </div>
      </div>
      <div className={popuplistitem.container__second}>
        <button
          onClick={DeleteHandler}
          className={popuplistitem.container__second__btn}
        >
          -
        </button>
        <button
          onClick={AddHandler}
          className={popuplistitem.container__second__btn}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default PopupListItem;
