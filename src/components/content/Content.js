import React from 'react';

class Content extends React.Component {

  render() {
    const { tabs, index } = this.props

    return (
      <div>
        <div class="ui segment active tab">{tabs[index].content}</div>
      </div>
    )
  }
}

export default Content;
