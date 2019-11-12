import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

function TabList({ tabs, index, Clicked }) {
  return (
    <>
      {
        tabs.map((tab, tabIndex) => (
          <Tab
            title={tab.title}
            Clicked={Clicked}
            index={tabIndex}
            disable={index === tabIndex}
          />
        ))
      }
      <div>{tabs[index].content}</div>
    </>
  );
}

TabList.propTypes = {
  tabs: PropTypes.instanceOf(Array).isRequired,
  index: PropTypes.number.isRequired,
  Clicked: PropTypes.instanceOf(Function).isRequired,
};

export default TabList;
