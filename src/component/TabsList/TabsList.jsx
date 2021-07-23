import React from 'react';
import PropTypes from 'prop-types';
import TitleButton from '../TitleButton/TitleButton';

const Tablist = ({tabs, selectedTabId, changeTab, onClick}) => (
  <ul className="tabsList">
    {tabs.map(tab => (
      <li
        key={tab.id}
      >
        <TitleButton
          selectedTabId={tab.id}
          title={tab.title}
          onClick={onClick}
          className={tab.id === selectedTabId ? 'show btn' : 'btn'}
        />
      </li>
    ))}
  </ul>
);

PropTypes.Tablist = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTabId: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Tablist;
