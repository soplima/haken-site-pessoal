import React from 'react'

{/* The TabButton component renders a button that can be used to switch between different tabs. 
It highlights the active tab with a specific style and applies different styles to inactive tabs.*/}
const TabButton = ({ active, selectTab, children, className }) => {
    const buttonClasses = active 
      ? 'text-white border-b border-blue-900' 
      : 'text-[#ADB7BE]';
  
    return (
      <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses} ${className}`}>
        {children}
      </button>
    );
  }

export default TabButton