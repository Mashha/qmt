import ListItem from "./ListItem";
import { products } from "../../Sections/Innovation-section/InnovationSectionData";

function List() {
  return (
    <div className='list'>
      {products.slice(0, 3).map((item, index) => (
        <ListItem
          key={index}
          number={item.number}
          name={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default List;
