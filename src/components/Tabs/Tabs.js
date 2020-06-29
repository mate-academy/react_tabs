import PropType from 'prop-types';
import React from 'react';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  state = {
    data: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (index) => {
    this.setState(() => ({ data: this.props.tabs[index].content }));
  }

  render() {
    return (
      <>
        <>
          {
            this.props.tabs
              .map((currentTab, index) => (
                <Tab
                  key={currentTab.title}
                  index={index}
                  onClick={this.onTabSelected}
                  name={currentTab.title}
                />
              ))
          }
        </>
        <p>{this.state.data}</p>
      </>
    );
  }
}

const tabsShape = PropType.shape({
  title: PropType.string,
  content: PropType.string,
});

Tabs.propTypes = {
  tabs: PropType.arrayOf(tabsShape).isRequired,
  index: PropType.number.isRequired,
};
