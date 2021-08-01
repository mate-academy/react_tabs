import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  state = {
    tabs: this.props.tabs,
  };

  render() {
    const { onSelect } = this.props;
    const { tabs } = this.state;

    return (
      <div className="tabs">
        {tabs.map(tab => (
          <div className="tabs__tab">
            <button
              type="button"
              key={tab.id}
              className="button"
              href=""
              onClick={() => {
                onSelect(tab);
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = {
  onSelect: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf({
    tab: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
