import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Tab = ({ tabTitle, tabClicker, tabClass }) => (
  <>
    <Button
      className={tabClass}
      title={tabTitle}
      variant="outline-secondary"
      onClick={tabClicker}
    >
      {tabTitle}
    </Button>
  </>
);

Tab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  tabClicker: PropTypes.func.isRequired,
  tabClass: PropTypes.string.isRequired,
};
