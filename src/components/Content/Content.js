import React from 'react';
import Shapes from '../Shape';
import './Content.css';

const Content = props => (
  <div className="content">
    {props.currentContent}
  </div>
);

Content.propTypes = Shapes.ShapeContent.isRequired;

export default Content;
