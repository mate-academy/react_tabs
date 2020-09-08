import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import cl from 'classnames';

export class Tabs extends React.Component {
  state = {
    id: 0,
  };

  render() {
    const { tabs } = this.props;
    const { id } = this.state;

    return (
      <section className="section">
        <div className="section__buttons">
          {tabs.map((tab, i) => (
            <button
              type="button"
              key={tab.title}
              className={cl('section__button', {
                'section__button--tab': id === i,
              })}
              onClick={() => {
                this.setState({
                  id: i,
                });
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <article className="section__message">
          {tabs[id].content}
        </article>
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
