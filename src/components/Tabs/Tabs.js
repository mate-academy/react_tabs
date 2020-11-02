import React, { PureComponent } from 'react';
import { Tab } from '../Tab/Tab';
import { TabsShape } from '../../shapes/TabsShape';

export class Tabs extends PureComponent {
  state = {
    tabContent: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (content) => {
    this.setState({
      tabContent: content,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabContent } = this.state;

    return (
      <div className="">
        <div className="ui attached tabular menu">
          <ul className="ui item">
            {
              tabs.map(({ title, content, index }) => (
                <li key={index}>
                  <Tab
                    title={title}
                    onTabSelected={() => this.onTabSelected(content)}
                  />
                </li>
              ))
            }
          </ul>
        </div>
        <p className="ui segment content">
          {
            `Content: ${tabContent}`
          }
        </p>
      </div>
    );
  }
}

Tabs.propTypes = TabsShape;
