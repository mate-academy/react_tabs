import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class TabsList extends React.Component {
  state = {
    textOfTab: '',
  }

  toSwitchText = (text) => {
    this.setState({ textOfTab: text });
  }

  render() {
    const { tabs } = this.props;
    const { textOfTab } = this.state;

    return (
      <>
        <div className="nav nav-tabs">
          {tabs.map(tab => (
            <Tab
              tab={tab}
              key={tab.title.match(/\d/g).join('')}
              toSwitchText={this.toSwitchText}
              text={textOfTab}
            />
          ))}

        </div>
        <p>{textOfTab}</p>
      </>
    );
  }
}

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
