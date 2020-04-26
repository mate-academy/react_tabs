import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Post from './Post';

const Tabs = ({ tabs }) => {
  const [currIdx, setCurrIdx] = useState({ idx: 0 });
  const chooseTabsIndex = idx => setCurrIdx({ idx });

  return (
    <>
      <div className="ui attached tabular menu inverted blue">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            tabClickHandler={() => chooseTabsIndex(index)}
            activeIdx={currIdx.idx}
            tabIdx={index}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
      <div className="ui bottom attached segment active tab inverted blue">
        <p>{tabs[currIdx.idx].content}</p>
        <Post {...tabs[currIdx.idx].post} />
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
