import React from 'react';

function Tab(props) {
  const {selectedTab, title} = props;

  return <button  type="button" onClick={selectedTab}>{title}</button>
}

export default Tab;
