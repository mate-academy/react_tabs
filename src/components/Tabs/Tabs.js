import React from 'react';
import './Tabs.css';
import Tab from './../Tab/Tab';

class Tabs extends React.Component {
  constructor({ props }) {
    super({ props })
    this.state = {
      active:0,
    }
  }

  activeTab = (index) => {
    this.setState({
      active: index,
    })
  }


  render() {
    const { tabs } = this.props;
    const { active } = this.state;
    return(
      <>
        <ul className="tab-list">
          {tabs.map((tab, index) => (
            <Tab
              tab={tab}
              key={tab.title}
              clickFunction={() => this.activeTab(index)}
              index={index}
              active={active}
            />
          ))}
        </ul>
        <div style={{background:tabs[active].background,
                     borderTop:tabs[active].borderTop,
                    }}
          className="content">
          {tabs[active].content}
          <hr className="line"/>
        </div>
      </>
    )
  }
}

export default Tabs;

