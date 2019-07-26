/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ children }) => (
  <div className="tabs">
    {children}
  </div>
);

Tabs.Tab = ({
  title, id, children, onTab, select,
}) => (
  <>
    <a
      href={`#/${title}`}
      className={`tab--title ${select ? 'select' : ''}`}
      onClick={() => onTab(id)}
    >
      {title}
    </a>

    {
      select && (
        <div
          className="tab--content"
        >
          {children}
        </div>
      )
    }
  </>
);

Tabs.propTypes = {
  children: PropTypes.object,
};

Tabs.defaultProps = {
  children: '',
};

Tabs.Tab.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
  children: PropTypes.object,
  onTab: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};

Tabs.Tab.defaultProps = {
  title: 'Title',
  children: '',
};

export default Tabs;
