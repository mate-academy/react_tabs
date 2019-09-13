import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.handleActiveIndex = this.handleActiveIndex.bind(this);
  }

  handleActiveIndex(id) {
    this.setState({ activeIndex: id });
  }

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;
    const tabContent = tabs[activeIndex].content;

    return (
      <>
        <ul className="nav nav-tabs">
          {tabs.map(
            (item, currentIndex) => (
              <Tab
                tab={item}
                activeIndex={activeIndex}
                currentIndex={currentIndex}
                key={item.title}
                handleActiveIndex={this.handleActiveIndex}
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
