import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TabShape } from '../../shapes/TabShape';
import { Tab } from '../Tab/Tab';

export class Tabs extends PureComponent {
  state = {
    contentTab: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (content) => {
    this.setState({
      contentTab: content,
    });
  }

  render() {
    const { tabs } = this.props;
    const { contentTab } = this.state;

    return (
      <div>
        <div className="tabs">
          <ul>
            {tabs.map(({ content, index, title }) => (
              <li key={index}>
                <Tab
                  title={title}
                  onTabSelected={() => this.onTabSelected(content)}
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="content">
          {contentTab}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabShape).isRequired,
  index: PropTypes.number.isRequired,
};
