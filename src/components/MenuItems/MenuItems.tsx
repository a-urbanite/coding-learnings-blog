import React from 'react'
import { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";

export const menuItemsList = [
    {
     title: "Home",
     route: "/"
    },
    {
      title: "Blog",
      route: "/blog"
     },
    {
      title: "Services",
      route: "/Services",
        submenu: [
         {
          title: "web design",
          route: "/web-design"
         },
         {
          title: "web development",
          route: "/web-dev",
          submenu: [
           {
            title: "Frontend",
            route: "/frontend"
           },
           {
            title: "Backend",
            route: "/backend",
            submenu: [
             {
              title: "NodeJS",
              route: "/nodejs"
             },
             {
              title: "PHP",
              route: "/php"
             },
            ],
           },
          ],
         },
         {
          title: "SEO",
          route: "/seo"
         }
        ]
       },
    {
     title: "About",
     route: "/about"
    }
   ];



const MenuItems = ({ items, depthLevel }:any) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef()  as React.MutableRefObject<HTMLLIElement>;

  useEffect(() => {
    const handler = (event: any) => {
     if (dropdown && ref!.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
   };
   
  const onMouseLeave = () => {
    setDropdown(false);
   };

  return (
    <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
        <button
          type="button" 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          {items.title}{" "}
          {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </button>
        <Dropdown 
          depthLevel={depthLevel}
          submenus={items.submenu}
          dropdown={dropdown} 
        />
        </>
      ) : (
        <a href={items.route}>{items.title}</a>
       )}
    </li>
  );
};
   
   export default MenuItems;