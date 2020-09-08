import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export const Tabs = ({ tabs, setTab, active }) => (
  <>
    {tabs.map(tab => (
      <Tab
        active={active}
        key={tab.id}
        setTab={setTab}
        {...tab}
      />
    ))}
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  setTab: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};
