import listsection from "./ListSection.module.css";
import List from "../../List/List";

const ListSection = () => {
  return (
    <section className={listsection.container}>
      <h2 className={listsection.container__h2}>Our Meals</h2>
      <List />
    </section>
  );
};

export default ListSection;
