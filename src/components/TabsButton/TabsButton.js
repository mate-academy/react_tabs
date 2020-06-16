import React from 'react';
import PropTypes from 'prop-types';

const TabsButtons = ({ tabs, changeContent }) => (
  <ul className="tabs__buttons">
    {
      tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            onClick={() => changeContent(tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))
    }
  </ul>
);

export { TabsButtons };

TabsButtons.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeContent: PropTypes.func.isRequired,
};
