import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { LoremIpsum } from 'react-lorem-ipsum';

import './ContentTabs.scss';

export class ContentTabs extends React.PureComponent {
  state = {
    currentTab: this.props.tabs[this.props.active],
  }

  switchTab = (tabId) => {
    this.setState({
      currentTab: this.props.tabs[tabId],
    });
  }

  render() {
    const { switchTab } = this;
    const { currentTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="js-container jumbotron">
        <h1 className="display-4">React tabs</h1>

        <hr className="my-4" />

        <ul className="nav nav-tabs">
          {tabs.map(({ title, content, id }) => (
            <li
              key={id}
              className=" nav-item"
            >
              <button
                type="button"
                className={ClassNames(
                  'nav-link',
                  { active: currentTab.title === title },
                )}
                onClick={() => switchTab(id)}
              >
                {title}
              </button>

            </li>
          ))}
        </ul>

        <div className="js-white">
          {currentTab.content}
          <LoremIpsum
            p="1"
            startWithLoremIpsum={false}
          />
        </div>
      </div>
    );
  }
}

ContentTabs.propTypes = {
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ContentTabs.defaultProps = {
  active: 0,
};
