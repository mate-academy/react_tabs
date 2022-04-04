import React from 'react';

const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
}) => {
  return (
    <div className="Container">
      {tabs.map((tab, index) => (
        <div
          key={tab.title}
          className="Tab"
        >
          <button
            key={tab.id}
            type="button"
            tabIndex={index}
            className="Tab__button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
