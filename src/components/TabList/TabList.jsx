import React from 'react';
import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class TabList extends React.Component {
  checkTab = (event) => {
    const { target } = event;

    this.props.handle(target.textContent);
  }

  render() {
    const { tabs } = this.props;

    const panes = tabs.map(tab => ({
      ...tab,
      menuItem: tab.title,
      pane: tab.content,
    }));

    return (
      <Tab
        panes={panes}
        renderActiveOnly={false}
        onTabChange={this.checkTab}
      />
    );
  }
}

TabList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
  handle: PropTypes.func.isRequired,
};
