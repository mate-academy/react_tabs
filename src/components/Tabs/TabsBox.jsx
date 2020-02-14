import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabsContent } from './TabsContent';
import './Tabs.css';

export class Tabs extends Component {
    state = {
      activeTabIndex: 0,
    };

  activeTabIndexChange = (idx) => {
    this.setState({ activeTabIndex: idx });
  }

  render() {
    const { tabs } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="jumbotron tabs-box">
        <ul className="nav nav-tabs">
          {tabs.map(({ title, content }, idx) => (
            <li className="nav-item">
              <button
                type="button"
                onClick={() => this.activeTabIndexChange(idx)}
                className={activeTabIndex === idx
                  ? `nav-link active`
                  : `nav-link`}
                key={title}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>

        <TabsContent
          content={tabs[activeTabIndex].content}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
