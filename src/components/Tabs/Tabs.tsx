import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  setSelectedTab: React.Dispatch<React.SetStateAction<Tab>>,
};

export const Tabs: React.FC<Props> = ({
  selectedTab, tabs, setSelectedTab,
}) => {
  const handleTabSelected = (idTab: string) => {
    const currentTab = tabs.find(tab => tab.id === idTab) || null;

    if (currentTab) {
      setSelectedTab({
        title: currentTab.title,
        content: currentTab.content,
        id: currentTab.id,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleTabSelected(selectedTab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              role="tab"
              onClick={() => handleTabSelected(tab.id)}
              onKeyDown={handleKeyDown}
              className={classNames({
                'is-active': selectedTab.title === tab.title,
              })}
              data-cy="Tab"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
