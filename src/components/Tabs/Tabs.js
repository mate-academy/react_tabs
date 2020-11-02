import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';

const Tabs = ({ tabs, index }) => {
  const [content, setContent] = useState(tabs[index].content);
  const [activeIndex, setActiveIndex] = useState(index);
  const onTabSelected = (currentIndex, text) => {
    setContent(text);
    setActiveIndex(currentIndex);
  };

  return (
    <div className="tabs">
      <div className="ui attached tabular menu">
        {tabs.map((tab, count) => (
          <Tab
            title={tab.title}
            key={tab.title}
            content={tab.content}
            onTabSelected={text => onTabSelected(count, text)}
            isActive={count === activeIndex}
          />
        ))}
      </div>
      <div className="ui bottom attached segment active tab">
        {content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export { Tabs };
