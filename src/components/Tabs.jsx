import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.PureComponent {
  render() {
    const { tabs, selected } = this.props;
    const tab = tabs.find(el => el.id === (`tab-${selected}`));

    return (
      <div>
        {
          tab.content
        }
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  selected: PropTypes.string.isRequired,
};

export default Tabs;
