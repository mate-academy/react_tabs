import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Tab = ({ tabTitle, tabClicker, tabName, tabClass }) => (
  <>
    <Button
      className={tabClass}
      name={tabName}
      variant="outline-secondary"
      onClick={tabClicker}
    >
      {tabTitle}
    </Button>
  </>
);

Tab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  tabClicker: PropTypes.func.isRequired,
  tabClass: PropTypes.string.isRequired,
};
