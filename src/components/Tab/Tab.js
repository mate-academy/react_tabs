import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ title, clickHandler, id, className }) => (
  <Nav.Item>
    <Nav.Link
      onClick={() => clickHandler(id)}
      className={className}
    >
      {title}
    </Nav.Link>
  </Nav.Item>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
