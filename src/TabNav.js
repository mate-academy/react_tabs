import React from 'react';
import './tabs.scss';

const TabNav = ({ list, select }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };

  return (
    <div className="nav-tab">
      <ul>
        {' '}
        {list.map((element, index) => (
          <li key={element.title}>
            <a
              href="#"
              onClick={e => onClick(e, index)}
            >
              {element.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabNav;
