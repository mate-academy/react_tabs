import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const choosedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>

      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li className={classNames({
              'is-active': choosedTab?.id === tab.id,
            })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
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
        {choosedTab ? choosedTab.content : ''}
      </div>
    </div>
  );
};
