import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import classNames from 'class-names';

const Tab = ({ tabs, onSelected, content, activeNumber }) => (
  <>
    {
      tabs.map((tab, index) => (
        <button
          className={classNames({
            button: true,
            button_active: index === activeNumber,
          })}
          type="button"
          key={tab.title}
          onClick={() => onSelected(index)}
        >
          {tab.title}
        </button>
      ))
    }
    <div className="content">{content}</div>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onSelected: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  activeNumber: PropTypes.number.isRequired,
};

export default React.memo(Tab);
