import React from 'react';
import PropTypes from 'prop-types';

class TabContent extends React.PureComponent {
  render() {
    const { content } = this.props;

    return (
      <article className="tabs__content">
        {content}
      </article>
    );
  }
}

TabContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TabContent;
