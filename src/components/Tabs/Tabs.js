import React from 'react';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { tabs } = props;

    this.state = {
      activeTab: tabs[0].title,
    };
  }

  clickTab = title => this.setState({ activeTab: title });

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div>
          <ul>
            {tabs.map((item) => {
              const { clickTab } = this;

              return (
                <Tab
                  title={item.title}
                  clickTab={clickTab}
                  key={item.title}
                  status={this.state.activeTab}
                />
              );
            })
            }
          </ul>
          <div>
            {tabs.map((item) => {
              const { title, content } = item;

              if (title !== this.state.activeTab) {
                return undefined;
              }

              return (
                <p key={title}>
                  {content}
                </p>
              );
            })
            }
          </div>
        </div>
      </>
    );
  }
}

export default Tabs;
