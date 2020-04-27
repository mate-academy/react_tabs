import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    active: 0,
  }

  onTabSelected = index => this.setState({
    active: index,
  });

  render() {
    const { tabs } = this.props;
    const { active } = this.state;

    return (
      <>
        <div className="tab">
          {tabs.map(tab => (
            <button
              type="button"
              className="button"
              key={tab.index}
              onClick={() => this.onTabSelected(tab.index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <Tab {...tabs[active]} />
      </>
    );
  }
}

Tabs.propTypes = PropTypes.arrayOf(PropTypes.objectOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
)).isRequired;

export default Tabs;
