import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import classNames from 'classnames';

export class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
  }

  render() {
    const { tabs } = this.state;

    return (
      <>
        <table className="table">
          <thead>
            <tr>
              {tabs.map((tab, index) => (
                <th
                  className={classNames('table-element', {
                    active: this.props.index === index,
                  })}
                  key={tab.title}
                  onClick={this.props.onTabSelected}
                >
                  {tab.title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
