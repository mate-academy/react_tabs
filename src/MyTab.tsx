import React from 'react';

interface State {
  tab: Tab,
  showContent: boolean,
}

interface Properties {
  tab: Tab,
  onTabSelected: Callback,
  showContent: boolean,
}

export class MyTab extends React.Component<Properties, State> {
  state: State = {
    tab: this.props.tab,
    showContent: this.props.showContent,
  };

  componentDidUpdate = (prevProps: Properties) => {
    if (prevProps.showContent !== this.state.showContent) {
      // this.state.showContent = this.props.showContent;
      // eslint-disable-next-line
      this.setState({ showContent: this.props.showContent });
    }
  };

  render() {
    const { tab, showContent } = this.state;

    return (
      <li key={tab.id}>
        <button
          type="button"
          onClick={() => this.props.onTabSelected(tab.id)}
        >
          {tab.title}
          {// eslint-disable-next-line
          console.log(showContent)}
        </button>
        {showContent && <p>{tab.content}</p>}
      </li>
    );
  }
}
