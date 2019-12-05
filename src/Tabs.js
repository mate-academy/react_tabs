import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  onTabSelected = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <>
        <div className="button__container">
          {tabs.map((tab, i) => (
            <Button
              tab={tab}
              handler={() => this.onTabSelected(i)}
              currentTab={tabIndex}
              index={i}
              key={tab.id}
            />
          ))}
        </div>
        <div className="text">
          {tabs[tabIndex].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
