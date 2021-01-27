import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, onClick } = this.props;

    return (
      <div>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
  onClick: PropTypes.func.isRequired,
};
