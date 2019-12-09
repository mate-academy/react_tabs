import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { activeTabIndex: 0 }

  render() {
    const { tab } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <section className="tabs__container">
        {
          tab.map((tabContent, i) => (
            <button
              type="button"
              key={tabContent.title}
              className={i === activeTabIndex ? 'tab tab-selected' : 'tab'}
              onClick={() => {
                this.setState({ activeTabIndex: i });
              }}
            >
              {tabContent.title}
            </button>
          ))
        }
        <hr className="hr" />
        <div className="tab__content">{tab[activeTabIndex].content}</div>
      </section>
    );
  }
}

Tabs.propTypes = { tab: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
