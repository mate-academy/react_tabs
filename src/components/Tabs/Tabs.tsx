import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/tab';

type PropsTabs = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<PropsTabs> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  // useEffect(() => {
  //   // const isDefaultSelectedId = !tabs
  //   //   .map(t => t.id)
  //   //   .includes(selectedTabId);

  //   const isValidTabId = () => {
  //     return tabs.map(tab => tab.id).includes(selectedTabId);
  //   };

  //   if (!isValidTabId()) {
  //     onTabSelected(tabs[0]);
  //   }
  // }, []);

  const isValidTabId = () => {
    return tabs.map(tab => tab.id).includes(selectedTabId);
  };

  const selected = isValidTabId()
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = selected === tab.id;

            return (
              <li
                className={classNames({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (isSelected) {
                      return;
                    }

                    onTabSelected(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
