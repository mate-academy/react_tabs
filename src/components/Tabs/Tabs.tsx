import classNames from 'classnames';
import { Tab } from '../../types';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void
}

export const Tabs = (props: Props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const content = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                // eslint-disable-next-line max-len
                className={classNames({ 'is-active': tab.id === selectedTabId })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
