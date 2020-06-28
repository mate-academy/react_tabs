import React from 'react';
import PropTypes from 'prop-types';
import { TabsTypes } from '../Shape/TabsTypes';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  constructor(props) {
    super({ props });

    this.state = {
      index: 0,
    };
  }

  onTabSelected = indexTab => () => {
    this.setState({
      index: indexTab,
    });
  };

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <>
        <div className="center">
          <ul className="nav nav-tabs">
            {tabs.map((heading, indexTab) => (
              <li key={tabs.title}>
                <Tab
                  title={heading.title}
                  isActive={index === indexTab}
                  click={this.onTabSelected(indexTab)}
                />
              </li>
            ))}
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade show active" id="home">
              <p>
                {tabs[this.state.index].content}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    TabsTypes,
  ).isRequired,
};
