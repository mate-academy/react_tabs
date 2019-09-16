import React from 'react';
import './Tabs.scss';
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
      <div className="tabs tabs__container">
        <div className="tabs__wrapper">
          {tabs.map(({ title }, index) => (
            <Tab
              handleClick={() => getActiveTab(index)}
              title={title}
              key={title}
              index={index}
              isActiveTab={activeTab}
            />
          ))}
        </div>
      </div>
      <p className="tabs__content">
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
