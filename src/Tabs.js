import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeTitle: 'Tab 1',
  }

  render() {
    const { activeTitle } = this.state;
    const { tabs } = this.props;
    const needText = tabs.find(item => item.title === activeTitle);

    return (
      <>
        <div>

          {tabs.map(item => (
            <button
              className={`${activeTitle === item.title
                ? 'active'
                : ''} button`}
              key={item.title}
              type="button"
              onClick={() => {
                this.setState({
                  activeTitle: item.title,
                });
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="content">
          {needText?.content}
        </div>
      </>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
};
