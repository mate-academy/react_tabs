import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { indexOfTabs: 0 }

  render() {
    const { tab } = this.props;
    const { state } = this;

    return (
      <section className="tabs__container">
        {
          tab.map((tabContent, i) => (
            <button
              type="button"
              key={tabContent.title}
              className={i === state.indexOfTabs ? 'tab tab-selected' : 'tab'}
              onClick={() => {
                this.setState({ indexOfTabs: i });
              }}
            >
              {tabContent.title}
            </button>
          ))
        }
        <hr className="hr" />
        <div className="tab__content">{tab[state.indexOfTabs].content}</div>
      </section>
    );
  }
}

Tabs.propTypes = { tab: PropTypes.objectOf(PropTypes.any).isRequired };

export default Tabs;
