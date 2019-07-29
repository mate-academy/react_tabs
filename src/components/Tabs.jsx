import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, hendleClickShowContent, currentContent }) => (
  <section>
    <div className="tabButtons">
      {tabs.map(tab => (
        <div key={tab.id}>
          <button
            type="button"
            className="Button"
            onClick={() => hendleClickShowContent(tab.id)}
          >
            {tab.title}
          </button>
        </div>
      ))}
    </div>
    <Tab currentContent={currentContent} />
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  hendleClickShowContent: PropTypes.func.isRequired,
  currentContent: PropTypes.string.isRequired,
};

export default Tabs;
