import classNames from 'classnames';
import { Tab } from '../Tabs';

type Props = {
  tabs: Tab[],
  Select: (value: string) => void,
  selectedTab: Tab | undefined,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  Select,
  selectedTab,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul className="list">
          {tabs.map(tab => {
            return (
              <li
                className={
                  classNames(
                    { 'is-active': tab.id === selectedTab?.id },
                  )
                }
                key={tab.id}
              >
                {selectedTab && (
                  <a
                    onClick={() => tab.id === selectedTab.id || Select(tab.id)}
                    href={`#${tab.id}`}
                  >
                    {tab.title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab && selectedTab.content}
      </div>
    </>
  );
};
