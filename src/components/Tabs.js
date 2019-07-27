/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './tabs.css';

class Tabs extends React.Component {
  static Tab = Tab;

  state = {
    isTab: 0,
  }

  handleClick = (id) => {
    this.setState({
      isTab: id,
    });
  }

  getChildren = (array, startIndex = 0, ChildElement) => {
    const { isTab } = this.state;

    return (
      array.map((item, index) => (
        <div
          key={`key${index + startIndex}`}
          className={`${index + startIndex === isTab ? 'select' : ''}`}
          onClick={() => this.handleClick(index + startIndex)}
        >
          {
            ChildElement
              ? (
                <ChildElement
                  title={item.title}
                >
                  {item.content}
                </ChildElement>
              )
              : item
          }
        </div>
      ))
    );
  }

  render() {
    const { tabs, children } = this.props;
    const startIndex = tabs ? tabs.length : 0;
    const checkChildren = children.length > 1 ? children : [children];

    return (
      <div className="tabs">
        {
          this.getChildren(tabs, 0, Tab)
        }
        {
          this.getChildren(checkChildren, startIndex)
        }
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

Tabs.defaultProps = {
  children: [],
  tabs: [],
};

export default Tabs;
