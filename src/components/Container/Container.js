import React from 'react';
import { Tabs } from '../Tabs/Tabs';
import { Content } from '../Content/Content';
import { validTab } from '../../propValidation';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.tabs[0].content,
    };
  }

  onTabSwitch = (text) => {
    this.setState({ content: text });
  }

  render() {
    return (
      <>
        <Tabs
          tabs={this.props.tabs}
          callback={this.onTabSwitch}
        />
        <Content content={this.state.content} />
      </>
    );
  }
}

Container.propTypes = {
  tabs: validTab.isRequired,
};
