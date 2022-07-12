import cartbutton from "./CartButton.module.css";
import CartIcon from "../../Icons/cart-outline.svg";
import { useSelector } from "react-redux";
import { PopupActions } from "../../ReduxToolKit/store";
import { useDispatch } from "react-redux";

const CartButton = () => {
  let totalQuantity = useSelector((state) => state.Cart.Quantity);
  let dispatch = useDispatch();

  let ClickHandler = () => {
    dispatch(PopupActions.Open(true));
  };
  return (
    <button onClick={ClickHandler} className={cartbutton.container}>
      <img
        className={cartbutton.container__img}
        src={CartIcon}
        alt="CartIcon"
      />
      <p className={cartbutton.container__p}>Your Cart</p>
      <p className={cartbutton.container__price}>{totalQuantity}</p>
    </button>
  );
};

export default CartButton;
