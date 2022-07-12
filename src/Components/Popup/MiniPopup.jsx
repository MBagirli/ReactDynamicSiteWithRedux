import miniPopup from "./MiniPopup.module.css";
import { useSelector } from "react-redux";

const MiniPopup = () => {
  let Popup = useSelector((state) => state.MiniPopup);

  return (
    <div id={miniPopup[`${Popup.state}`]} className={miniPopup.container}>
      <p className={miniPopup.container__p}>{Popup.message}</p>
    </div>
  );
};

export default MiniPopup;
