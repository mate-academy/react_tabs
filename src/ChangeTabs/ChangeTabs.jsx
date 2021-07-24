import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import './ChangeTabs.scss';
import { ChangeTabsPropTypes } from './ChangeTabsPropTypes';

export const ChangeTabs = ({ onClick, stateId, id, title, content }) => (
  <Nav.Item key={id}>
    <Nav.Link
      className="nav__link"
      type="submit"
      onClick={onClick}
    >
      {title}
      <div className="nav__content">
        {id === stateId && (content)}
      </div>
    </Nav.Link>
  </Nav.Item>
);

ChangeTabs.propTypes = ChangeTabsPropTypes;
