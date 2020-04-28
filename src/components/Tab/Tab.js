import React, { PureComponent } from 'react';
import './Tab.scss';
import PropTypes from 'prop-types';

class Tab extends PureComponent {
  render() {
    const { content, activeTab, callback } = this.props;

    return (
      <li>
        <button
          type="button"
          className={
            activeTab === content.id
              ? 'tabs__button tabs__button--active'
              : 'tabs__button'
          }
          onClick={() => callback(content.id)}
        >
          {content.title}
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Tab;
