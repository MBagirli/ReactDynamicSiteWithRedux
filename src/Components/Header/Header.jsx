import header from "./Header.module.css";
import CartButton from "../Buttons/CartButton/CartButton";
import { useSelector } from "react-redux";

const Header = () => {
  let MiniPopupShow = useSelector((state) => state.Cart.show);

  return (
    <header
      id={MiniPopupShow ? header.Opened : ""}
      className={header.container}
    >
      <h1>ReactMeals</h1>
      <CartButton />
    </header>
  );
};

export default Header;
