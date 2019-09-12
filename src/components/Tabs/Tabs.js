import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleIndex = this.handleIndex.bind(this);
  }

  handleIndex(title) {
    let findTab = this.props.tabs.findIndex(item => item.title === title);

    if (findTab === -1) {
      findTab = 0;
    }

    this.setState({ index: findTab });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;
    const tabContent = tabs[index].content;

    return (
      <>
        <ul className="nav nav-tabs">
          {tabs.map(
            (item, idx) => (
              <Tab
                tab={item}
                index={index}
                idx={idx}
                key={item.title}
                handleIndex={this.handleIndex}
              />
            )
          )}
        </ul>
        <p className="content">{tabContent}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
