import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      {tabs.map((tab, i) => (
        <button
          className={classes('tabs-btn', { btnCurrent: index === i })}
          type="button"
          key={tab}
          onClick={() => setIndex(i)}
        >
          {tab.title}
        </button>
      ))}
      <div className="tabs-content">{tabs[index].content}</div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
