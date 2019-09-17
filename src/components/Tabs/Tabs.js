import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

const Tabs = (props) => {
  const {
    tabs,
    getActiveTab,
    activeTab,
  } = props;

  return (
    <>
      <div className="tabs">
        {tabs.map(({ title }, index) => (
          <Tab
            title={title}
            handleClick={() => getActiveTab(index)}
            key={title}
            index={index}
            isActiveTab={activeTab}
          />
        ))}
      </div>
      <p>
        { tabs[activeTab].content }
      </p>
    </>
  );
};

Tabs.propTypes = ({
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.srting,
    content: PropTypes.srting,
  })),
  getActiveTab: PropTypes.func,
  activeTab: PropTypes.number,
}).isRequired;

export default Tabs;
