import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import './tabs.css';

const Tabs = (props) => {
  const {
    tabs,
    selectedTab,
    handleSelected,
  } = props;

  return (
    <div>
      <ul className="tabs">
        {
          tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleSelected(index)}
              className={classnames({
               'tabs__item': true,
               'tabs__item--active': selectedTab === index,
                  })
              }
            >
              {tab.title}
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs:  PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.number.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default Tabs;


