import text from "./Text.module.css";

const Text = () => {
  return (
    <div className={text.container}>
      <h2 className={text.container__h2}>Delicious Food, Delivered To You</h2>
      <p className={text.container__p}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p className={text.container__p}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default Text;
