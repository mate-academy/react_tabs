import classNames from 'classnames';
import { Callback } from '../types/Callback';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: Callback;
};

export const Tabs: React.FC<Props> = (props: Props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const tabContent = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div
        className="tabs is-boxed"
      >
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId || (tab === tabContent),
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          )) }
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {tabContent.content}
      </div>
    </>
  );
};
