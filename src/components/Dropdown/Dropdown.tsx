import React from 'react'
import MenuItems from "../MenuItems/MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: any) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
      ))}
    </ul>
  );
};
   
export default Dropdown;