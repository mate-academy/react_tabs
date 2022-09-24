import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

const getTab = (tabs: Tab[], tabId: string) => {
  return tabs.find(({ id }) => id === tabId) || tabs[0];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const { id: tabId, content } = getTab(tabs, selectedTabId);

  const handleClick = (id: string) => {
    if (id !== tabId) {
      onTabSelected(getTab(tabs, id));
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={id}
              className={classNames(
                {
                  'is-active': id === tabId,
                },
              )}
              data-cy="Tab"
              onClick={() => handleClick(id)}
            >
              <a href={`#${id}`} data-cy="TabLink">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
