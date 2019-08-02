import React from 'react';
import PropTypes from 'prop-types';
import TabItem from './TabItem';

const Tabs = ({ tabs, setActiveTab, handleChangeTab }) => (
  <>
    <div>
      <h1>{`${tabs.length} tabs`}</h1>
    </div>
    <ul className="tab">
      {tabs.map((tab, index) => (
        <TabItem
          key={tab.content}
          name={index}
          handleChangeTab={handleChangeTab}
          setActiveTab={setActiveTab}
          tab={tab}
          index={index}
        />
      ))}
    </ul>
  </>
);

Tabs.propTypes = {
  setActiveTab: PropTypes.number.isRequired,
  handleChangeTab: PropTypes.func.isRequired,
  tabs: PropTypes.shape().isRequired,
};

export default Tabs;
