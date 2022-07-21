import classNames from 'classnames';
import { FC } from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  selectTab: Tab,
  tabs: Tab[],
  handleSelectTab: (tab: Tab) => void,
};

export const Tabs: FC<Props> = ({
  selectTab,
  tabs,
  handleSelectTab,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectTab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleSelectTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="block"
        data-cy="tab-content"
      >
        {selectTab.content}
      </div>
    </div>
  );
};
