import React from 'react';
import { ChangeTabSelected } from '../../types/ChangeTabSelected';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: ChangeTabSelected;
};

export class Tabs extends React.PureComponent<Props> {
  render() {
    const {
      tabs,
      selectedTabId,
      onTabSelected,
    } = this.props;

    return (
      <>
        <div className="tabs">
          {tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              onClick={() => {
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p>
          {onTabSelected(selectedTabId)?.content}
        </p>
      </>
    );
  }
}
