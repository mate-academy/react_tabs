import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './Tabs.scss';

export class Tabs extends React.Component {
  state = {
    data: this.props.tabs,
    index: 0,
  }

  selectTab = (tab) => {
    this.setState({
      index: tab,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <nav className="tabs">
          {
            data.map((tab, index) => (
              <button
                className={ClassNames(
                  'tabs__button',
                  { ' tabs__button-selected': this.state.index === index },
                )}
                key={tab.title}
                type="button"
                onClick={() => this.selectTab(index)}
              >
                {tab.title}
              </button>
            ))
          }
        </nav>

        <Tab>
          {data[this.state.index].content}
        </Tab>
      </>
    );
  }
}

const Tab = props => (
  <div className="tab">
    {props.children}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Tab.propTypes = {
  children: PropTypes.string.isRequired,
};
