import list from "./List.module.css";
import ListItem from "../ListItem/ListItem";

let array = [
  { name: "Sushi", description: "Finest fish veggies", price: 22.99 },
  { name: "Schnitzel", description: "A german speciality", price: 16.55 },
  { name: "Dolma", description: "Delicious Azerbaijani food", price: 20.99 },
  { name: "Nuggets", description: "Delicious American food", price: 21.99 },
  { name: "Pizza", description: "Delicious Italian food", price: 31.99 },
  { name: "Doner", description: "Delicious Turkish food", price: 51.99 },
  { name: "Kebab", description: "Delicious Turkish food", price: 55.99 },
  { name: "Xinkal", description: "Delicious Georgian food", price: 35.99 },
  { name: "Pasta", description: "Delicious Italian food", price: 31.99 },
];

let content = array.map((item, index) => {
  return (
    <ListItem
      key={index}
      obj={{
        name: item.name,
        description: item.description,
        price: item.price,
      }}
    />
  );
});

const List = () => {
  return <ul className={list.container}>{content}</ul>;
};

export default List;
