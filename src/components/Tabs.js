import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: 'Tab 1', content: 'Some text 1' },
        { title: 'Tab 2', content: 'Some text 2' },
        { title: 'Tab 3', content: 'Some text 3' },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="ui top attached tabular menu">
          <button
            type="submit"
            onClick={() => this.props.onTabSelected(this.state.tabs[0].content)}
          >
            {this.state.tabs[0].title}
          </button>
          <button
            type="submit"
            onClick={() => this.props.onTabSelected(this.state.tabs[1].content)}
          >
            {this.state.tabs[1].title}
          </button>
          <button
            type="submit"
            onClick={() => this.props.onTabSelected(this.state.tabs[2].content)}
          >
            {this.state.tabs[2].title}
          </button>
        </div>
      </>
    );
  }
}

export default Tabs;
