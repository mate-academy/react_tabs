import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = ({ tabs, tabClickHandler, tabindex }) => (
  <div className="tabs__panel">
    {tabs.map((item, index) => (
      <button
        type="button"
        key={item.title}
        onClick={() => tabClickHandler(index)}
        className={`tabs__panel__btn
        ${tabindex === index ? 'tabs__panel__btn--active' : ''}`}
      >
        {item.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabindex: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  tabClickHandler: PropTypes.func.isRequired,
};

export default Tabs;
