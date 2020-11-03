import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedIndex, onClick }) => (
  <div className="box">
    <div className="tabs is-left is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          <li className={selectedIndex === index ? 'is-active' : ''}>
            <a
              href="#a"
              key={tab.title}
              onClick={(event) => {
                event.preventDefault();
                onClick(index);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <p>{tabs[selectedIndex].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,

  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
