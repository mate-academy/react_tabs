import React from 'react';

const Tab = ({ tab, index, handleClick }) => {
  const { title } = tab;

  return (
    <li className="tabs__item">
      <button onClick={() => handleClick(index)}>
        {title}
      </button>
    </li>
  );
};

export default Tab;
