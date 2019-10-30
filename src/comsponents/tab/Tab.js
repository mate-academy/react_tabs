import React from 'react'
import PropTypes from 'prop-types';

function Tab(props) {
  const { key, index, tab: {title}, tabActivated, activeTab } = props;
  const activeStyle = activeTab === index
    ? 'item active'
    : 'item';

  return (
    <a className={activeStyle} onClick={tabActivated} key={key}>{title}</a>
  )
}

Tab.propTypes = {
  key: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tabActivated: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
}

export default Tab;
