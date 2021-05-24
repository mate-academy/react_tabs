import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends React.Component {
  changeStatusHandler = (id) => {
    const { idSelectedTab, onChangeSelTabs } = this.props;

    if (idSelectedTab !== id) {
      onChangeSelTabs(id);
    }
  }

  render() {
    const { tabs, idSelectedTab } = this.props;
    const selectedTab = tabs.find(tab => tab.id === idSelectedTab);

    return (
      <div className="tab">
        <div className="controlMenu">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={classNames(
                'btn',
                { btn__active: tab.id === idSelectedTab },
              )}
              onClick={() => this.changeStatusHandler(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="tab__content">
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  idSelectedTab: PropTypes.string.isRequired,
  onChangeSelTabs: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
