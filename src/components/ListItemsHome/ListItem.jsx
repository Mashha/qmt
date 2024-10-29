import React from "react";
import "./listItem.css";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

function ListItem({ number, name, link }) {
  return (
    <Link to={link}>
      <div className='list-item'>
        <span className='list-item-number'>{number}</span>
        <h4 className='list-item-name'>{name}</h4>
        <span className='list-item-icon'><IconArrowRight stroke={1}/></span>
      </div>
    </Link>
  );
}

export default ListItem;
