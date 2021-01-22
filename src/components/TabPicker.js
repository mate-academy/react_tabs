import React from 'react';
import PropTypes from 'prop-types';

export const TabPicker = ({
  tabs,
  selectedTab,
  onChange,
}) => (
  <div>
    <ul className="tabList">
      {tabs.map(tab => (
        <li
          className="tabList__item"
          key={tab.title}
          onClick={() => {
            onChange(tab.content);
          }}
        >
          {tab.title}
        </li>
      ))}
    </ul>
    <hr />
    <p>{selectedTab || tabs[0].content}</p>
  </div>
);

TabPicker.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  selectedTab: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TabPicker.defaultProps = {
  selectedTab: '',
};
