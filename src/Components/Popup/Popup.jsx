import popup from "./Popup.module.css";
import PopupList from "./PopupList/PopupList";

const Popup = () => {
  return (
    <div className={popup.container}>
      <PopupList />
    </div>
  );
};

export default Popup;
