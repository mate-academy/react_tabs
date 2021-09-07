import React from 'react';
import classNames from 'classnames';
import { Tab } from './Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (index: number) => void,
};

export class Tabs extends React.Component<Props> {
  state = {
  };

  render() {
    const { tabs, onTabSelected, selectedTabId } = this.props;
    const selected = tabs.find(elem => elem.id === selectedTabId);

    return (
      <div>
        <div className="tabs">
          {tabs.map((tab, index: number) => {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabSelected(index)}
                className={classNames('tabs_choice', { is_active: (selected === tab) })}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        <div>
          <p className="content">
            {selected ? selected.content : ''}
          </p>
        </div>
      </div>
    );
  }
}
