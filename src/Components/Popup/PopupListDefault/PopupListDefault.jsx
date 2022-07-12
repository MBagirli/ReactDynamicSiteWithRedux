import popupListDefault from "./PopupListDefault.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PopupActions } from "../../ReduxToolKit/store";

const PopupListDefault = () => {
  let dispatch = useDispatch();

  let ClickHandler = () => {
    dispatch(PopupActions.Open(false));
  };

  let array = useSelector((state) => state.Cart.Products);

  let value = 0;
  for (let i of array) {
    value += i.quantity * i.price;
  }

  return (
    <li className={popupListDefault.container}>
      <div className={popupListDefault.container__first}>
        <p className={popupListDefault.container__first__Total}>Total Amount</p>
        <p className={popupListDefault.container__first__price}>
          ${value.toFixed(2)}
        </p>
      </div>
      <div className={popupListDefault.container__second}>
        <button
          onClick={ClickHandler}
          id={popupListDefault.btn__1}
          className={popupListDefault.container__second__btn}
        >
          Order
        </button>
        <button
          onClick={ClickHandler}
          className={popupListDefault.container__second__btn}
        >
          Close
        </button>
      </div>
    </li>
  );
};

export default PopupListDefault;
