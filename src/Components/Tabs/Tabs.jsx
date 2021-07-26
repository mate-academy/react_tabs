import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import './Tabs.scss';
import { TabsPropTypes } from './TabsPropTypes';

export const Tabs = ({ onClick, stateId, id, title, content }) => (
  <div className="nav__block">
    <Nav.Item key={id}>
      <Nav.Link
        className="nav__link"
        type="submit"
        onClick={onClick}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
    <div className="nav__content">
      {id === stateId && (content)}
    </div>
  </div>
);

Tabs.propTypes = TabsPropTypes;
