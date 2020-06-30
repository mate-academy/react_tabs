import React from 'react';

const Tab = (props) => {
  const { tabs, tabIndex, tabSwitch } = props;

  return (

    tabs.map((tab, index) => (
      <button
        onClick={() => tabSwitch(index)}
        type="button"
        key={tab.title}
        className={
          tabIndex === index
            ? 'tabs__click tabs__click-active'
            : 'tabs__click'}
      >
        {tab.title}
      </button>
    ))
  );
};

export default Tab;
