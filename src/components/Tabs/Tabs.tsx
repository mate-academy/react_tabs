import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../Tab';

interface Props {
  tabs: Tab[];
  setSelectedTab: (tab: Tab) => void,
  selectedTab: Tab,
}

export const Tabs: FC<Props> = ({ tabs, setSelectedTab, selectedTab }) => {
  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': selectedTab.id === id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
