import React from 'react';
import './App.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      isActive: false,
    };
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
      isActive: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="wrapper">
          <div className="tab-list">
            {tabs.map((tab, i) => (
              <button
                onClick={() => this.onTabSelected(i)}
                // title={tab.title}
                key={tab.title}
                index={i}
                type="button"
                className={this.state.isActive === i
                  ? 'button--active'
                  : 'button'}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="text-container">
          {tabs[this.state.activeTab].content}
        </div>
      </>
    );
  }
}

// class Tab  extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.onClick(this.props.index);
//   };

//   render() {
//     const =
//     return (
//       <button type="button" onClick={this.handleClick}>
//         {title}
//       </button>
//     );
//   }
// }
// }

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <>
        <div className="App">
          {/* eslint-disable-next-line */}
          <h1>{tabs.length} tabs</h1>
        </div>
        <Tabs tabs={tabs} />
      </>
    );
  }
}

export default App;
