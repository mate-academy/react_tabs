import React from 'react';
import './Tab.css';
import { TabShape } from '../../shapes';

export const Tab = (props) => {
  const { onSelect, tabs, tabIndex } = props;

  return (
    tabs.map((item, index) => (
      <li className="tabs__item" key={item.title}>
        <button
          type="button"
          onClick={() => onSelect(index)}
          className={
            tabIndex === index
              ? 'tabs__button tabs__button--active'
              : 'tabs__button'
          }
        >
          {item.title}
        </button>
      </li>
    ))
  );
};

Tab.propTypes = TabShape.isRequired;
