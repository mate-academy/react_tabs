import React from 'react';

function Tab(tab) {
  const { children } = tab;

  return (
    <div className="tab-content__wrapp">
      <p className="tab-content">{children}</p>
    </div>
  );
}

export default Tab;
