import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends React.Component {
  state = {
    indexActive: 0,
  }

  onTabSelected = (index) => {
    this.setState({ indexActive: index });
  }

  render() {
    const { tabs } = this.props;
    const { indexActive } = this.state;

    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            type="submit"
            key={tab.title}
            className={classNames({
              active: indexActive === index,
            })}
            onClick={() => this.onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))}
        <div className="content">{tabs[indexActive].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
