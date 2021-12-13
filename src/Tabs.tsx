import React from 'react';
import './Tabs.scss';
import { Tab }  from './Tab';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[],
  selectedId: number
};

export class Tabs extends React.Component<Props, any> {
  state = {
    name: '',
  };

  render() {
    const { tabs, selectedId } = this.props;

    return (
      <div className="tabs">
        {tabs.map(tab => (
          <div key={tab.id}>
            {tab.title}
            {this.state.name}
          </div>
        ))}
      </div>
    );
  }
}
