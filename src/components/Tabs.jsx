import React  from 'react';
import './tabs.css';


export class Tabs extends React.PureComponent {




  render() {
    const { tabsList, getcontent } = this.props;

    return (
      tabsList.map(tab => (
        <div className="wrapper" key={tab.id}>
          <button
            className="button"
            onClick={() => getcontent(tab)}
          >
            {tab.title}
          </button>
        </div>
      ))
    )
  }
}
