import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <section className="section">
        <div className="wrap">
          {tabs.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={
                (i === index
                  ? 'section__button section__button--active'
                  : 'section__button')}
              onClick={() => {
                this.setState({ index: i });
              }}
            >
              {item.title}
            </button>
          ))
          }
        </div>
        <p className="section__text">
          {tabs[this.state.index].content}
        </p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tabs;
