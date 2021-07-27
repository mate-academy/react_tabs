import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Buttons';

export const Tab = ({ tabs, changeTab, content }) => (
  <>
    { tabs.map(tab => (
      <Button
        key={tab.id}
        tab={tab}
        onTabSelected={changeTab}
      />
    ))}

    <div>{content}</div>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeTab: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
