// implement a component here
import classNames from 'classnames';
import './Tabs.scss';
import { useState } from 'react';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Tab[];
  content: string;
  selectedTabId: (tabid: string) => void;
  onTabSelected: (tabid: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  content,
  onTabSelected,
}) => {
  const [currentTab, setCurrentTub] = useState('tab-1');

  const getCurretnTub = (tab: Tab) => {
    selectedTabId(tab.id);
    onTabSelected(tab.id);
    setCurrentTub(tab.id);
  };

  return (
    <div className="tab__box m-6">
      <div className="tab__buttons-box is-flex-direction-column">
        {tabs.map(tab => (
          <div
            key={tab.id}
            data-cy="tab-content"
            className={classNames(
              'tab__buttons',
              {
                active: tab.content === content,
              },
            )}
          >
            <button
              type="button"
              className={classNames(
                'has-text-info button is-white',
                {
                  'is-static': tab.id === currentTab,
                },
              )}
              onClick={() => {
                getCurretnTub(tab);
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="tab__subtitle subtitle">{content}</div>
    </div>
  );
};
