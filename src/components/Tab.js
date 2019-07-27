/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, children }) => (
  <>
    <a
      href={`#/${title}`}
      className="tab--title"
    >
      {title}
    </a>

    <div
      className="tab--content"
    >
      {children}
    </div>
  </>
);

Tab.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

Tab.defaultProps = {
  title: 'Title',
  children: '',
};

export default Tab;
