import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  changeTab = (id) => {
    this.setState({
      activeTab: id,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__header">
          {tabs.map(tab => (
            <div key={tab.title} className="tabs__container">
              <button
                className={classNames('tabs__button', {
                  tabs__button_active: activeTab === tab.id,
                })}
                type="button"
                onClick={() => {
                  this.changeTab(tab.id);
                }}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>

        <p className="tabs__content">
          {tabs[activeTab].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
