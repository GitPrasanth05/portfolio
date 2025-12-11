import React from 'react';
import {navIcons} from "#constants";
import dayjs from "dayjs";
const data =[
  {id:1 , name:'Portfolio'},
  {id:2 , name:'Contact'},
  {id:3, name:'Projects'},
]
const Navbar = () => {
  return <nav>
    <img src="/images/logo.svg"/>
    <p className="font-bold"> Prasanth's Portfolio </p>
    <ul>
      { data.map(({id,name}) => (
          <li key={id}>
            <p>{name}</p>
          </li>
      ))
      }
    </ul>
    <ul>
      {navIcons.map(({ id, img }) => (
          <li key={id}>
            <img src={img} className="icon-hover" alt={`icon-${id}`} />
          </li>
      ))}
    </ul>
    <time>{dayjs().format("ddd MMM D h:mm A")}</time>
  </nav>

};
export default Navbar;
