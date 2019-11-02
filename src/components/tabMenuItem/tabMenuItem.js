import React from 'react';
import PropTypes from 'prop-types';

class TabMenuItem extends React.PureComponent {
  render() {
    const { tab: { title, id }, activeTabId } = this.props;
    const className = id === activeTabId ? 'active item' : 'item';

    return (
      <a className={className}>{title}</a>
    );
  }
}

TabMenuItem.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  activeTabId: PropTypes.number.isRequired,
};

export default TabMenuItem;
