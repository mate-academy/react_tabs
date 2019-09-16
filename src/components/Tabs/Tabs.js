import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

function Tabs({ tabs, activeTab, clickTab }) {
  return (
    <div>
      <ul>
        {tabs.map(({ title }) => (
          <Tab
            title={title}
            clickTab={clickTab}
            key={title}
            status={activeTab}
          />
        ))}
      </ul>
      <div>
        {
          tabs.map(({ title, content }) => (
            title !== activeTab
              ? undefined
              : (
                <p key={title}>
                  {content}
                </p>
              )
          ))
        }
      </div>
    </div>
  );
}

Tabs.propTypes = ({
  tabs: PropTypes.arrayOf({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  activeTab: PropTypes.string,
  clickTab: PropTypes.func,
}).isRequired;

export default Tabs;
