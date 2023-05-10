import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../Types/Types';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs:FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              const { id, title } = tab;
              const isRigthId = id === selectedTab.id;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={classNames({
                    'is-active': isRigthId,
                  })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => onTabSelected(tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};
