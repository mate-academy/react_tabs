import React from 'react';
import PropTypes from 'prop-types';

class TabMenuItem extends React.PureComponent {
  render() {
    const { title, isActive } = this.props.tab;
    const className = isActive ? 'active item' : 'item';

    return (
      <a className={className}>{title}</a>
    );
  }
}

TabMenuItem.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TabMenuItem;
