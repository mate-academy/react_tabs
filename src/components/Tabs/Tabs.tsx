import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
type State = {};

export class Tabs extends React.Component<Props, State> {
  state: State = {};

  render() {
    const { tabs, onTabSelected } = this.props;

    return (
      <div className="Tabs row">
        {tabs.map(tab => (
          <div key={tab.id} className="">
            <button
              type="button"
              id={tab.id}
              className="Tabs__button"
              onClick={onTabSelected}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
