import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  handleChange(i) {
    this.setState({ index: i });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <section className="tabs">
          {tabs.map(
            (tab, i) => (
              <button
                className={
                  i === this.state.index ? 'tab--active' : 'tab'
                }
                type="button"
                onClick={() => this.handleChange(i)}
              >
                {tab.title}
              </button>
            )
          )}
        </section>
        <div className="text">{tabs[this.state.index].content}</div>
      </>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
