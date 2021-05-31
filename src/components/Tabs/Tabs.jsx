import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  titleClick = (tab) => {
    this.props.onTabSelected(tab);
  }

  render() {
    const {
      tabs,
      selectedTab,
    } = this.props;

    return (
      <table
        className="table"
      >
        <thead>
          <tr>
            {tabs.map(tab => (
              <th
                key={tab.id}
                className={classNames('title', {
                  checked: selectedTab.id === tab.id,
                })}
                onClick={() => {
                  this.titleClick(tab);
                }}
              >
                {tab.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="content">
              {selectedTab.content}
            </th>
          </tr>
        </tbody>

      </table>
    );
  }
}

const tabsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabsType).isRequired,
  selectedTab: tabsType.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
