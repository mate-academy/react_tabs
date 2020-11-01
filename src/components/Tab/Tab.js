import React from 'react';
import { Nav } from 'react-bootstrap';
import './Tab.scss'

export class Tab extends React.Component {
  render() {
    const { title, clickHandler, id, className } = this.props;
    return(
      <Nav.Item>
        <Nav.Link
          onClick={()=>clickHandler(id)}
          className={className}
        >
          {title}
        </Nav.Link>
      </Nav.Item>
    )
  }
}

