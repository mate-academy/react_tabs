import React from 'react';
import propTypes from 'prop-types';

const Tabs = ({ tabs, indexTab, selectTab }) => (

  <>
    <div className="mt-5 mb-5">
      {
        tabs.map((tab, index) => (
          <button
            key={tab.content + 1}
            type="button"
            className="btn btn-primary"
            onClick={() => selectTab(index)}
          >
            {tab.title}
          </button>
        ))
      }
    </div>
    <div className="text-info font-weight-bold">
      {tabs[indexTab].content}
    </div>
  </>

);

Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.object).isRequired,
  selectTab: propTypes.func.isRequired,
  indexTab: propTypes.number.isRequired,
};

export default Tabs;
