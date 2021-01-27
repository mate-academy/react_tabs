import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  render() {
    const { tabs, onChange } = this.props;

    return (
      <div>
        {tabs.map(el => (
          <button
            type="button"
            key={el.title}
            onClick={() => {
              onChange(el.title);
            }}
          >
            {el.title}
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
  onChange: PropTypes.func.isRequired,
};
