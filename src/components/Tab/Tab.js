import React from 'react';
import './Tab.css';

const Tab = (props) => {
  const { title, status, clickTab } = props;
  const activeTab = (status === title)
    ? 'tab tab-active'
    : 'tab tab-not-active';

  return (
    <>
      <button
        type="button"
        className={activeTab}
        onClick={() => clickTab(title)}
      >
        {title}
      </button>
    </>
  );
};

export default Tab;
