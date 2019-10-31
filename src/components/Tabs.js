import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
        <div className="ui top attached tabular menu">
          {this.props.tabs.map(item => (
            <button
              key={item.title}
              type="submit"
              onClick={() => this.props.onTabSelected(item.content)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Tabs;
