import classNames from 'classnames';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Tab[],
  onTabSelected: (tabId: string) => void,
  selectedTabId: string,
}

export const Tabs = (props: Props) => {
  const {
    onTabSelected,
    tabs,
    selectedTabId,
  } = props;

  const getCurrentTab = () => (
    tabs.find(tab => tab.id === selectedTabId) || tabs[0]
  );

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {getCurrentTab().content}
      </div>
    </>
  );
};
