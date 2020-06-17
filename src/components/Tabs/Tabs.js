import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.PureComponent {
  state = {
    activeContent: this.props.children[0].props.children,
    activeTitle: this.props.children[0].props.title,
  }

  changeContent = (content, title) => {
    this.setState({
      activeContent: content,
      activeTitle: title,
    });
  }

  render() {
    const tabs = [...this.props.children];

    return (
      <div className="tabs">
        <div className="tabs__buttons">
          {
            tabs.map((tab, index) => ({
              ...tab,
              props: {
                ...tab.props,
                handleClick: this.changeContent,
                isActive: this.state.activeTitle === tab.props.title,
              },
            }))
          }
        </div>
        <p>{this.state.activeContent}</p>
      </div>
    );
  }
}

export { Tabs };

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
