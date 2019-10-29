import React from 'react';

const TabUnique = ({tab, onTabSelected, index, activeTab}) => {
  const getClassNameForButton = i => (
    activeTab === i ? 'active item' : 'item'
  );

  return (
    <button
      type="button"
      className={getClassNameForButton(index)}
      onClick={() => onTabSelected(index)}
    >
      {tab.title}
    </button>
  );
};

export default TabUnique;
