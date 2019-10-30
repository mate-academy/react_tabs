import React from 'react';
import PropTypes from 'prop-types';


class TabContent extends React.Component {

  render() {
    const { content } = this.props

    return (
      <div>
        <div class="ui bottom attached segment active tab">{content}</div>
      </div>
    )
  }
}

TabContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default TabContent;
