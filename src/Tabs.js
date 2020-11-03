import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({ tabs, index, onSelected }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.index}
          type="button"
          className={
            classNames('tabs__item', {
              'tabs__item--active': tab.index === index,
            })
          }
          onClick={() => onSelected(tab.index)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tabs__content">
      {tabs[index].content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  index: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default Tabs;
