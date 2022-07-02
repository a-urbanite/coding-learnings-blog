import React from 'react'
import "./Collapsible.css"

const Collapsible = ({collapsed, children, titleOpen, titleClosed}:any) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  
    return (
      <>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? titleClosed : titleOpen} 
        </button>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </>
    );
  };


export default Collapsible