import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  tabs,
  onChange,
  selectedTab,
}) => (
  <>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="submit"
        value={tab.id}
        onClick={(event) => {
          const choosenTab = tabs
            .find(choosentab => choosentab.id === event.target.value);

          onChange(choosenTab);
        }}
      >
        {tab.title}
      </button>
    ))}

    <p>{selectedTab.content}</p>
  </>
);

const tabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  selectedTab: tabType.isRequired,
  onChange: PropTypes.isRequired,
  tabs: PropTypes.arrayOf(tabType).isRequired,
};

export default Tabs;
