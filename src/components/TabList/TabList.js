import React from 'react';
import PropTypes from 'prop-types';
import { TabShape } from '../../shapes';
import './TabList.css';
import { Content } from '../Content/Content';
import { Tab } from '../Tab/Tab';

class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  onSelect = (index) => {
    this.setState({
      tabIndex: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs">
        <ul className="tabs__menu">
          <Tab
            tabs={tabs}
            onSelect={this.onSelect}
            tabIndex={tabIndex}
          />
        </ul>
        <div className="tabs__content">
          <Content tabIndex={tabIndex} tabs={tabs} />
        </div>
      </div>
    );
  }
}

TabList.propTypes = {
  tabs: PropTypes.arrayOf(TabShape).isRequired,
};

export { TabList };
