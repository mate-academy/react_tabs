import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.PureComponent {
  render() {
    const { content } = this.props;

    return (
      <div className="tabcontent">
        <p>{content}</p>
      </div>
    );
  }
}

Tab.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tab;
